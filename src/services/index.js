import axios from "axios";

export const api = axios.create({
  baseURL: "https://fullstack-back-r6hv.onrender.com",
  timeout: 3000,
});
