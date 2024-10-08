import { useState, useEffect } from "react";
import { getCategories } from "../../apis/lib/categories";

const CategoryFilter = ({ setCategoryFilter }) => {
	const [categories, setCategories] = useState([]);
	const [isSelected, setIsSelected] = useState([]);
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const productsCategories = await getCategories();
				setCategories(productsCategories);
			} catch (error) {
				console.error("Failed to load categories:", error);
			}
		};
		fetchCategories();
	}, []);

	useEffect(() => {
		setCategoryFilter(isSelected);
	}, [isSelected, setCategoryFilter]);

	const handleClick = (e) => {
		let slug = e.target.name;
		setIsSelected((prevSelected) =>
			prevSelected.includes(slug)
				? prevSelected.filter((item) => item !== slug)
				: [...prevSelected, slug]
		);
	};

	return (
		<div className="input-group mb-3 pt-2">
			<div className="input-group-prepend w-100">
				<div className="border-0">
					<ul className="list-group">
						{categories.map((category, i) => (
							<li className="list-group-item" key={i}>
								<label className="cr-wrapper" htmlFor={category.slug}>
									<input
										className="form-check-input me-1 me-2"
										type="checkbox"
										onChange={handleClick}
										name={category.slug}
										id={category.slug}
										aria-label={category.name}
									/>
									<div className="cr-input"></div>
									<span>{category.name}</span>
								</label>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default CategoryFilter;
