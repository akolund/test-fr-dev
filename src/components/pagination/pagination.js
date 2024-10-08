import React from "react";

const Pagination = ({ postsPerPage, totalPost, paginateNumber }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className="pagination justify-content-center">
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className="page-item">
						<button
							onClick={() => paginateNumber(pageNumber)}
							className="page-link">
							{pageNumber}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Pagination;
