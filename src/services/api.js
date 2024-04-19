import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:9000/api",
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: import.meta.env.VITE_API_MONGO,
  //baseURL: "https://schoolshopapi-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
