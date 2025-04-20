import axios from "axios";

const baseURL = "http://localhost:8000/api"; // change this to your BE URL

const api = axios.create({
  baseURL,
  withCredentials: true, // if you're using cookies for auth
});

// Optional: Set token from localStorage
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
