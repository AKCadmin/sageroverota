// src/services/api.js
import axiosInstance from '@/lib/axiosInstance';
import { toast } from 'react-toastify';

/**
 * Send a GET request
 * @param {string} url - API endpoint
 * @param {object} params - Optional query parameters
 * @param {object} config - Optional axios config
 */
export const get = async (url, params = {}, config = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      params,
      ...config,
    });
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

/**
 * Send a POST request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Optional axios config
 */
export const post = async (url, data = {}, config = {}) => {
  try {
    console.log("POST Request URL:", url);
    console.log("POST Request Data:", data);
    const response = await axiosInstance.post(url, data, config);
    console.log("POST Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    toast.error(error.message);
  }
};

/**
 * Send a PUT request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Optional axios config
 */
export const put = async (url, data = {}, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

/**
 * Send a DELETE request
 * @param {string} url - API endpoint
 * @param {object} config - Optional axios config
 */
export const del = async (url, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
