import { axiosInstance } from ".";

export const getAllItems = async () => {
    try {
        const response = await axiosInstance.get("/proxy/api/items");
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
}

export const getItemDetailsById = async (id) => {
    try {
        const response = await axiosInstance.get(`/proxy/api/items/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with id ${id}:`, error);
        throw error;
    }
}

export const submitItem = async (itemData) => {
    try {
        const response = await axiosInstance.post("/proxy/api/items", itemData);
        return response.data;
    } catch (error) {
        console.error("Error creating item:", error);
        throw error;
    }
}

export const reqToBorrowItem = async (itemId, userId) => {
    try {
        const response = await axiosInstance.post(`/proxy/api/items/${itemId}/request`, { userId });
        return response.data;
    } catch (error) {
        console.error(`Error requesting to borrow item with id ${itemId}:`, error);
        throw error;
    }
}