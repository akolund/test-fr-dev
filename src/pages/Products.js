import { useState } from "react";

import Search from "../components/search/search";
import SortData from "../components/search/sort";
import Sidebar from "../components/sidebar/sidebar";

import ProductsListing from "../components/products/products";

export default function Products() {
	const [maxPrice, setMaxPrice] = useState(0);
	const [searchKeywords, setSearchKeywords] = useState("");
	const [priceFilter, setPriceFilter] = useState();
	const [categoryFilter, setCategoryFilter] = useState([]);

	const [sortBy, setSortBy] = useState();

	return (
		<div className="products container  py-5 px-5">
			<h1>Products Articles</h1>
			<div className="">
				<div className="row g-3 ">
					<Search setSearchKeywords={setSearchKeywords} />
					<SortData setSortBy={setSortBy} />
				</div>

				<div className="row g-3">
					<div className="col-12 col-md-2">
						<Sidebar
							maxPrice={maxPrice}
							setPriceFilter={setPriceFilter}
							setCategoryFilter={setCategoryFilter}></Sidebar>
					</div>
					<div className="col-12 col-md-10">
						<ProductsListing
							setMaxPrice={setMaxPrice}
							priceFilter={priceFilter}
							searchKeywords={searchKeywords}
							categoryFilter={categoryFilter}
							sortBy={sortBy}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
