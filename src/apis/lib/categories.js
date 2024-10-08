import axiosClient from "../apiClient";

export async function getCategories() {
	try {
		const response = await axiosClient.get(`/products/categories`);
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}
