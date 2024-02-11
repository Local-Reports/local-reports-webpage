/** @format */

import React from "react";
import { Link } from "react-router-dom";
// import video1 from "../MainPage"
import "./MainPage.css";
import logoIMG from "./LocalReports.png"

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleButtonClick = userType => {
		this.props.onUserTypeChange(userType); // Call the callback function provided by the parent
	};

	render() {
		return (
			<div>
				<img src={logoIMG} className="logo-img" />
				<section id="main-box">
					<div>
						<h1 className="heading">Welcome to Local Reports</h1>
						<h2 className="sub-heading">
							Please indicate your preferred action to proceed
						</h2>
						{/* <video src=""></video> */}
					</div>
					<div>
						<Link to="/signin">
							<button
								id="Btn"
								type="submit"
								onClick={() => this.handleButtonClick("police")}>
								Police
							</button>
						</Link>
					</div>
					<div>
						<Link to="/signin">
							<button
								id="Btn"
								type="submit"
								onClick={() => this.handleButtonClick("civilian")}>
								Civilian
							</button>
						</Link>
					</div>
					<div>
						<Link to="/map">
							<button
								id="Btn"
								type="submit"
								onClick={() => this.handleButtonClick("map")}>
								Map Visualization
							</button>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

export default MainPage;
