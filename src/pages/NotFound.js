import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
	return (
		<>
			<h1>404 Not Found</h1>
			<p>This page does not exist</p>
			<Link to="/">Go back to Homepage</Link>
		</>
	);
}
