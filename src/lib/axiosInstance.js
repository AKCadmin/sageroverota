import ENDPOINTS from '@/constants/endPoints';
import axios from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Load credentials from environment variables
export const CREDENTIALS = {
  email: process.env.NEXT_PUBLIC_API_EMAIL,
  password: process.env.NEXT_PUBLIC_API_PASSWORD,
};

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Enhanced request interceptor
axiosInstance.interceptors.request.use(
  async config => {
    let token = localStorage.getItem('token');

    // If no token exists, get a fresh one before making the request
    if (!token) {
      try {
        const res = await axios.post(`${API_BASE_URL}${ENDPOINTS.AUTH.GENERATE_TOKEN}`, CREDENTIALS);

        token = res.data.token;
        localStorage.setItem('token', token);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Enhanced response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // Handle cases where token is invalid/expired (401) or not provided (400/403)
    if (
      (error.response?.status === 401 ||
        error.response?.status === 400 ||
        error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      isRefreshing = true;

      try {
        // Get new token
        const res = await axios.post(`${API_BASE_URL}${ENDPOINTS.AUTH.GENERATE_TOKEN}`, CREDENTIALS);
        const newToken = res.data.token;

        // Store new token
        localStorage.setItem('token', newToken);
        axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;

        // Process queued requests
        processQueue(null, newToken);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Clear token and queue if refresh fails
        localStorage.removeItem('token');
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;