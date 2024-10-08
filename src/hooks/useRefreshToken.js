import { getRefreshToken } from "../apis/lib/users";
import useAuth from "./useAuth";
const useRefreshToken = () => {
	const { auth, setAuth } = useAuth();

	const refresh = async () => {
		const response = await getRefreshToken(auth.refreshToken);
		//console.log(response);
		setAuth((prev) => {
			return { ...prev, accessToken: response.data.accessToken };
		});
		return response.data.accessToken;
	};

	return refresh;
};
export default useRefreshToken;
