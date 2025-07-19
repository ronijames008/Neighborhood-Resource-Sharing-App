import { axiosInstance } from ".";

export const getMapItems = async () => {
    try {
        const response = await axiosInstance.get("proxy/api/map-items");
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
}