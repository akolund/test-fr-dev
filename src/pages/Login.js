import { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
//import AuthContext from "../context/authProvider";
import useAuth from "../hooks/useAuth";
import { loginUser } from "../apis/lib/users";
export default function Login() {
	//const { setAuth } = useContext(AuthContext);
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const userRef = useRef();
	const errRef = useRef();
	const [user, setUser] = useState("");
	const [pwd, setPwd] = useState("");
	const [errMsg, setErrMsg] = useState();
	const [success, setSuccess] = useState(false);

	//set focus on first input when the component loads
	useEffect(() => {
		userRef.current.focus();
	}, []); //there is nothing in dependency array so it will happen only when the component loads
	//it will reference to user ref

	// this will empty error message if the user changes user state
	useEffect(() => {
		setErrMsg("");
	}, [user, pwd]);
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await loginUser(user, pwd);

			const accessToken = response?.data.accessToken;
			const refreshToken = response?.data.refreshToken;
			setAuth({ user, pwd, accessToken, refreshToken });
			setUser("");
			setPwd("");
			setSuccess(true);

			Cookies.set("token", accessToken, { expires: 7, secure: true });
			navigate(from, { replace: true });
		} catch (error) {
			if (!error.response) {
				setErrMsg("No server response");
			} else if (error.response?.status === 400) {
				setErrMsg("Missing Username or Password");
			} else if (error.response?.status === 401) {
				setErrMsg("Unauthorized");
			} else {
				setErrMsg("Login Failed");
			}
		}
	};

	return (
		<div className="container py-5">
			{success ? (
				<section>
					<h1>You are logged in</h1>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? "errMesg" : "offscreen"}
						aria-live="assertive">
						{errMsg}
					</p>
					<form onSubmit={handleSubmit} className="form-group w-25">
						<h1>Sign In</h1>
						<label className="my-2" htmlFor="username">
							Username:
						</label>
						<input
							className="form-control"
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							value={user}
							onChange={(e) => setUser(e.target.value)}
							required
						/>
						<label className="my-2" htmlFor="password">
							Password:
						</label>
						<input
							className="form-control"
							type="password"
							id="password"
							name="password"
							autoComplete="on"
							value={pwd}
							onChange={(e) => setPwd(e.target.value)}
							required
						/>
						<button className="my-4 btn btn-primary">Sign In</button>
					</form>
				</section>
			)}
		</div>
	);
}
