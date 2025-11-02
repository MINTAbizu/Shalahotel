import axios from "axios";

// Get your API base URL from .env
const API_BASE = import.meta.env.VITE_API_URL;

// console.log("API Base URL:", API_BASE); // Debugging (optional)

const API = axios.create({
  baseURL: API_BASE, // ✅
  headers: { "Content-Type": "application/json" },
});

//  Optional: Attach token if stored in localStorage
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
