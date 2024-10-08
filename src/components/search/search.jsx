const Search = ({ setSearchKeywords }) => {
	return (
		<>
			<div className="col-md-7 form-inline mt-4 offset-xl-2">
				<label htmlFor="search">Search product:</label>
				<input
					id="search"
					className="form-control mr-sm-2 my-3"
					type="text"
					placeholder="Search"
					aria-label="Search"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setSearchKeywords(e.target.value);
						}
					}}
				/>
			</div>
		</>
	);
};
export default Search;
