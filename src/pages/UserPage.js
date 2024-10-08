import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
export default function UserPage() {
	const { auth } = useAuth();
	const refresh = useRefreshToken();
	console.log(auth);
	return (
		<div className="container  py-5 ">
			<h1>Hello {auth.user}</h1>
			<p>This is your User Profile page</p>
			<p>Click Refresh button and check your tokens in console</p>
			<button className="btn btn-primary" onClick={() => refresh()}>
				Refresh
			</button>
		</div>
	);
}
