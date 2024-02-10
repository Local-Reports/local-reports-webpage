/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./frontend/SignIn/SignIn.js";
import Register from "./frontend/Register/Register.js";
import MapDisplay from "./frontend/MapDisplay/MapDisplay.js";
import MainPage from "./frontend/MainPage/MainPage.js";
import ReportLostPerson from "./frontend/ReportLostPerson/ReportLostPerson.js";
import ReportInformation from "./frontend/ReportInformation/ReportInformation.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: "none"
		};
	}

	handleUserTypeChange = userType => {
		this.setState({ userType });
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Routes>
						<Route
							path="/"
							element={
								<MainPage onUserTypeChange={this.handleUserTypeChange} />
							}
						/>
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
						<Route
							path="/report-information"
							element={<ReportInformation userType={this.state.userType} />}
						/>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
