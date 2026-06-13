import axios from "axios";
import { apiConfig } from "../../config/api";

export const apiClient = axios.create({
  baseURL: apiConfig.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// TODO : Add interceptors for error handling
