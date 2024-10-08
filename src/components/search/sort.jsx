import { useState } from "react";
const SortData = ({ setSortBy }) => {
	const [sortByValue, setSortByValue] = useState("");
	const handleChange = (event) => {
		let sort = event.target.value;
		setSortByValue(sort);
		setSortBy(sort);
	};
	return (
		<div className="form-inline m-0 m-md-4 col-md-2 ">
			<label htmlFor={sortByValue}>Sort products by: </label>
			<select
				className="form-select my-3"
				aria-label="Sort products by"
				name="sortBy"
				id={sortByValue}
				onChange={handleChange}>
				<option disabled defaultValue value>
					select an option
				</option>
				<option value="titleASC">Title A - Z</option>
				<option value="titleDESC">Title Z - A</option>
				<option value="priceASC">Bigest Price</option>
				<option value="priceDESC">Lowest Price</option>
			</select>
		</div>
	);
};
export default SortData;
