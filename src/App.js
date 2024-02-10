/** @format */

import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useHistory
} from "react-router-dom";
import "./App.css";
import SignIn from "./frontend/SignIn/SignIn.js";
import Register from "./frontend/Register/Register.js";
import MapDisplay from "./frontend/MapDisplay/MapDisplay.js";
import MainPage from "./frontend/MainPage/MainPage.js";
import Navigation from "./frontend/Navigation/Navigation.js";
import ReportLostPerson from "./frontend/ReportLostPerson/ReportLostPerson.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: null,
			buttonClicked: false
		};
	}

	handleButtonClick = userType => {
		this.setState({ userType });
		this.setState({ buttonClicked: true });
	};

	render() {
		const { userType, buttonClicked } = this.state;

		return (
			<Router>
				<div className="App">
					<ul className="App-header">
						{!buttonClicked && (
							<>
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
							</>
						)}
					</ul>
					<Routes>
						<Route exact path="/" />
						<Route
							path="/signin"
							element={<SignIn userType={this.state.userType} />}
						/>
						<Route
							path="/register"
							element={<Register userType={this.state.userType} />}
						/>
						<Route
							path="/map"
							element={<MapDisplay userType={this.state.userType} />}
						/>
						<Route
							path="/report"
							element={<ReportLostPerson userType={this.state.userType} />}
						/>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
