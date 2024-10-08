import { NavLink } from "react-router-dom";

function Navbar() {
	const linkClass = ({ isActive }) =>
		isActive ? "nav-link active" : "nav-link";
	return (
		<header>
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-dark"
				role="navigation">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse m-auto " id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item m p-3 ">
								<NavLink className={linkClass} to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item m p-3 ">
								<NavLink className={linkClass} to="/products">
									Products
								</NavLink>
							</li>
							<li className="nav-item m p-3 ">
								<NavLink className={linkClass} to="/user">
									User
								</NavLink>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item m p-3 ">
								<NavLink className={linkClass} to="/login">
									Login
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
export default Navbar;
