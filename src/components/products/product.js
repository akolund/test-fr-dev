import { useState } from "react";
import Modal from "../modal/Modal";

const Product = ({ product }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [openModalId, setOpenModalId] = useState(null);
	return (
		<div className="card col-lg-3 col-md-6 col-sm-12 p-3 " key={product.id}>
			<img className="card-img-top" src={product.thumbnail} alt="" />
			<div className="card-body">
				<h6 className="card-title">{product.title}</h6>

				<p className="card-text">{product.description.substring(0, 100)}...</p>
				<span className="finalPrice">{product.price}</span>
			</div>
			<button
				className="btn btn-primary"
				onClick={() => {
					setIsOpen(true);
					setOpenModalId(product.id);
				}}>
				More details
			</button>
			{isOpen && openModalId === product.id && (
				<Modal setIsOpen={setIsOpen}>
					<img src={product.thumbnail} alt="" />
					<h6>{product.title}</h6>
					<p>{product.description}</p>
					<span className="finalPrice">{product.price}</span>
				</Modal>
			)}
		</div>
	);
};
export default Product;
