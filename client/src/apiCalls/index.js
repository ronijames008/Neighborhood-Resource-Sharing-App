import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/proxy',
    headers: {
        "Content-Type": "application/json",
    }
});