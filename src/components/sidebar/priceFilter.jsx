import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "./sidebar.css";

const PriceFilter = ({ maxPrice, setPriceFilter }) => {
	const min = 0;

	const max = maxPrice;

	const [values, setValues] = useState([min, max]);

	useEffect(() => {
		if (maxPrice > 0) {
			setValues([min, maxPrice]); // Update values once maxPrice is loaded
		}
	}, [maxPrice]);
	useEffect(() => {
		setPriceFilter(values);
	}, [values, setPriceFilter]);

	return (
		<div className="input-group mb-5 pb-2 mt-3">
			<div className="input-group-prepend w-100">
				<div className="my-2">
					${values[0]} - {values[1]}
				</div>

				<ReactSlider
					className="horizontalSlider"
					thumbClassName="sliderThumb"
					trackClassName="sidebarTrack"
					onChange={setValues}
					min={min}
					max={max}
					defaultValue={[min, max]}
					value={values}
					ariaLabel={["Lower thumb", "Upper thumb"]}
					ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
					renderThumb={(props, state) => {
						const { key, ...restProps } = props; // If key exists in props, we still destructure it out
						return (
							<div key={state.index} {...restProps}>
								{" "}
								{/* Add unique key here */}
								<div className="thumbValues">{state.valueNow}</div>
							</div>
						);
					}}
					pearling
					minDistance={10}
				/>
			</div>
		</div>
	);
};
export default PriceFilter;
