import PriceFilter from "./priceFilter";
import CategoryFilter from "./categoryFilter";
import "./sidebar.css";
const Sidebar = ({ maxPrice, setPriceFilter, setCategoryFilter }) => {
	return (
		<div className="sidebar mt-6 float">
			<h6>Filters:</h6>
			<PriceFilter maxPrice={maxPrice} setPriceFilter={setPriceFilter} />
			<CategoryFilter setCategoryFilter={setCategoryFilter} />
		</div>
	);
};
export default Sidebar;
