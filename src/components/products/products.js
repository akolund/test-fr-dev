import { useState, useEffect } from "react";
import { getProducts } from "../../apis/lib/products";
import Pagination from "../pagination/pagination";
import Product from "./product";
import Spinner from "../Spinner";
import {
	sortProducts,
	filterByKeywords,
	filterByCategory,
	filterByPrice,
	paginate,
} from "../../helpers/productsFunctions";
const ProductsListing = ({
	isHomePage = false,
	setMaxPrice,
	priceFilter,
	searchKeywords,
	categoryFilter,
	sortBy,
}) => {
	const [data, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productsData = await getProducts();
				setProducts(productsData.products);

				// for the price filter component
				if (setMaxPrice) {
					const maxProductPrice = Math.max(
						...productsData.products.map((product) => product.price)
					);
					setMaxPrice(maxProductPrice > 0 ? Math.round(maxProductPrice) : 5000);
				}
			} catch (error) {
				console.error("Failed to load products:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, [setMaxPrice]);

	useEffect(() => {
		let filteredData = data;

		// sortingAscDesc
		filteredData = sortProducts(filteredData, sortBy);

		// search keywords
		filteredData = filterByKeywords(filteredData, searchKeywords);

		// price filtering
		filteredData = filterByPrice(filteredData, priceFilter);
		// Filter by category
		filteredData = filterByCategory(filteredData, categoryFilter);

		setCurrentPage(1);
		setFilteredProducts(filteredData);
	}, [data, searchKeywords, priceFilter, categoryFilter, sortBy]);

	const productLisings = isHomePage
		? data.slice(0, 3)
		: paginate(filteredProducts, currentPage, postsPerPage);

	const paginateNumber = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="row gap-2 justify-content-center">
			<div className="products title ps-0 offset-xl-1">
				<p>{isHomePage ? "Recent products" : "List of products"}</p>
			</div>
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<>
					{productLisings.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</>
			)}
			{!isHomePage && (
				<Pagination
					postsPerPage={postsPerPage}
					totalPost={filteredProducts.length}
					paginateNumber={paginateNumber}
				/>
			)}
		</div>
	);
};

export default ProductsListing;
