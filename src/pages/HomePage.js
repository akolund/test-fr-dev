import React from "react";
import { Link } from "react-router-dom";
import ProductsListing from "../components/products/products";
import useAuth from "../hooks/useAuth";
export default function HomePage() {
	const { auth } = useAuth();
	return (
		<div className="container py-5">
			<h1>Home</h1>
			<p>
				Hi {auth.user}, go to your <Link to="/user"> user page </Link>
			</p>
			<ProductsListing isHomePage={true} />
			<div className="w-100 text-center my-5">
				<Link className="mx-auto btn btn-primary " to="/products">
					See more
				</Link>
			</div>
		</div>
	);
}
