import PuffLoader from "react-spinners/ClipLoader";

const override = {
	display: "block",
	margin: "0 auto",
};

const Spinner = ({ loading }) => {
	return (
		<div>
			<PuffLoader
				color="#419fd2"
				loading={loading}
				cssOverride={override}
				size={60}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spinner;
