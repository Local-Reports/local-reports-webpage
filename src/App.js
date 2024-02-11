import React, { Component } from "react";
import {LoadScript} from '@react-google-maps/api';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./frontend/SignIn/SignIn.js";
import Register from "./frontend/Register/Register.js";
import MapDisplay from "./frontend/MapDisplay/MapDisplay.js";
import MainPage from "./frontend/MainPage/MainPage.js";
import ReportLostPerson from "./frontend/ReportLostPerson/ReportLostPerson.js";
import ReportInformation from "./frontend/ReportInformation/ReportInformation.js";


const test = "AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: "none",
			token: ""
		};
	}

	handleUserTypeChange = (userType) => {
		this.setState({ userType });
	};

	updateToken = (token) => {
		this.setState({ token });
	};

	render() {
		return (
			<Router>
				<LoadScript googleMapsApiKey={test}>
					<div className="App">
						<Routes>
							<Route
								path="/"
								element={
									<MainPage
										userType={this.state.userType}
										onUserTypeChange={this.handleUserTypeChange}
									/>
								}
							/>
							<Route
								path="/signin"
								element={
									<SignIn
										userType={this.state.userType}
										updateToken={this.updateToken}
									/>
								}
							/>
							<Route
								path="/register"
								element={
									<Register
										userType={this.state.userType}
										updateToken={this.updateToken}
									/>
								}
							/>
							<Route
								path="/map"
								element={
									<MapDisplay
										userType={this.state.userType}
										token={this.state.token}
									/>
								}
							/>
							<Route
								path="/report"
								element={
									<ReportLostPerson
										userType={this.state.userType}
										token={this.state.token}
									/>
								}
							/>
							<Route
								path="/report-information"
								// path="/:id"
								element={
									<ReportInformation
										userType={this.state.userType}
										token={this.state.token}
										id={this.state.id}
									/>
								}
							/>
							<Route
								name="report-information"
								element={
									<ReportInformation
										userType={this.state.userType}
										token={this.state.token}
									/>
								}
							/>
						</Routes>
					</div>
				</LoadScript>
			</Router>
		);
	}
}

export default App;
