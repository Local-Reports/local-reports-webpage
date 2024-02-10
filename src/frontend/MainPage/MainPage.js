/** @format */

import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	handleButtonClick = (userType) => {
		this.props.onUserTypeChange(userType); // Call the callback function provided by the parent
	};

	render() {
		return (
			<div>
				<div>
					<h1 className="title">
						Welcome to Local Report, Where We Help Missing or Lost Children
						Return Home
					</h1>
				</div>
				<div>
					<Link to="/signin">
						<input
							type="submit"
							value="Police"
							onClick={() => this.handleButtonClick("police")}
						/>
					</Link>
				</div>
				<div>
					<Link to="/signin">
						<input
							type="submit"
							value="Civilian"
							onClick={() => this.handleButtonClick("civilian")}
						/>
					</Link>
				</div>
				<div>
					<Link to="/map">
						<input
							type="submit"
							value="Map Visualization"
							onClick={() => this.handleButtonClick("map")}
						/>
					</Link>
				</div>
			</div>
		);
	}
}

export default MainPage;
