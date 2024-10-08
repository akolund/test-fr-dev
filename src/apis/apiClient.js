import axios from "axios";
const axiosClient = axios.create({
	baseURL: "https://dummyjson.com",
	timeout: 50000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default axiosClient;
