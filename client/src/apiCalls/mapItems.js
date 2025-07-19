import { axiosInstance } from ".";

export const getMapItems = async () => {
    try {
        const response = await axiosInstance.get("/items");
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
}