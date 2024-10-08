import React from "react";
import { Routes, Route } from "react-router-dom";

import RequireAuth from "./components/requireAuth";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFound";

function App() {
	return (
		<div className="App bootstrap-wrapper">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/login" element={<Login />} />

					{/* Routes requiring authentication */}
					<Route element={<RequireAuth />}>
						<Route index element={<HomePage />} />
						<Route path="/products" element={<Products />} />
						<Route path="/:id" element={<UserPage />} />
					</Route>

					{/* Wildcard for 404 page */}
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
