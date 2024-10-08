import axiosClient from "../apiClient";

export async function getCategories() {
	try {
		// Make the API request and return the data
		const response = await axiosClient.get(`/products/categories`);
		return response.data; // Return the data from the response
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error; // Rethrow the error to handle it in the calling component
	}
}
