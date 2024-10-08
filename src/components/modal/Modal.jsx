import React from "react";
import styles from "./modal.module.css";

const Modal = ({ setIsOpen, children }) => {
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />

			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>Dialog</h5>
					</div>
					<button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
						<div
							className="bi-plus-lg"
							style={{
								marginBottom: "-3px",
								transform: "rotate(45deg)",
							}}></div>
					</button>
					<div className={styles.modalContent}>{children}</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.cancelBtn}
								onClick={() => setIsOpen(false)}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
