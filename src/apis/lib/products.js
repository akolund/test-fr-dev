import axiosClient from "../apiClient";

export async function getProducts(params) {
	try {
		const response = await axiosClient.get(`/products?limit=0`);
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}

export async function searchProducts(searchKeyword, sortBy) {
	try {
		const response = await axiosClient.get(
			`/products/search?q=${searchKeyword}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}
export async function getProductByCategory(categoryFilter) {
	try {
		const response = await axiosClient.get(
			`/products/category/${categoryFilter}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
}
