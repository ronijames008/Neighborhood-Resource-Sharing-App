import { axiosInstance } from ".";

export const getUserTestScore = async (userId) => {
    try {
        const response = await axiosInstance.get(`/proxy/api/trust-score/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user trust score:", error);
        throw error;
    }
}