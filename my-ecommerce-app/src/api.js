// Import Axios
import axios from "axios";

// Environment variables with fallback
const API_BASE_URL = "http://127.0.0.1:8000";
const ACCESS_TOKEN = "access_token";

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to include the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Fetch products from the backend
export const fetchProducts = async () => {
  try {
    const response = await api.get("/api/products/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response || error.message);
    throw error;
  }
};

export default api;
