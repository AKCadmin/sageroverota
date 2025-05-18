import ENDPOINTS from "@/constants/endPoints";
import { API_BASE_URL, CREDENTIALS } from "@/lib/axiosInstance";

export const ensureToken = async () => {
  const existingToken = localStorage.getItem('token');

  if (!existingToken) {
    try {
      const res = await axios.post(`${API_BASE_URL}${ENDPOINTS.AUTH.GENERATE_TOKEN}`, CREDENTIALS);
      const token = res.data.token;
      localStorage.setItem('token', token);
    } catch (err) {
      console.error('Token generation failed:', err);
    }
  }
};