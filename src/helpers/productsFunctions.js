// Sort products by title or price
export const sortProducts = (products, sortBy) => {
	if (!sortBy) return products;
	switch (sortBy) {
		case "titleASC":
			return products.sort((a, b) => a.title.localeCompare(b.title));
		case "titleDESC":
			return products.sort((a, b) => b.title.localeCompare(a.title));
		case "priceASC":
			return products.sort((a, b) => b.price - a.price);
		case "priceDESC":
			return products.sort((a, b) => a.price - b.price);
		default:
			return products;
	}
};

// Filter products by search keywords
export const filterByKeywords = (products, keywords) => {
	if (!keywords) return products;
	return products.filter((product) =>
		product.title.toLowerCase().includes(keywords.toLowerCase())
	);
};

// Filter products by price range
export const filterByPrice = (products, priceFilter) => {
	if (!Array.isArray(priceFilter) || priceFilter.length < 2) return products;
	return products.filter(
		(product) =>
			product.price >= priceFilter[0] && product.price <= priceFilter[1]
	);
};

// Paginate products
export const paginate = (products, currentPage, postsPerPage) => {
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	return products.slice(indexOfFirstPost, indexOfLastPost);
};
