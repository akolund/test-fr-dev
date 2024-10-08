import axiosClient from "../apiClient";

export async function loginUser(user, pwd) {
	const response = await axiosClient.post(
		"/user/login",
		{
			username: user,
			password: pwd,
		},
		{ headers: { "Content-Type": "application/json" } }
	);

	return response;
}
export async function getRefreshToken(refreshToken) {
	try {
		const response = await axiosClient.post(
			"/auth/refresh",
			{
				refreshToken: refreshToken,
				expiresInMins: 1,
			},
			{
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
				},
				"Access-Control-Allow-Credentials": true,
			}
		);

		return response;
	} catch (error) {
		console.error("Error refreshing token:", error);
	}
}
