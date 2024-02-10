/** @format */

import React, { Component } from "react";
import "./App.css";
import TypePerson from "./frontend/TypePerson/TypePerson.js";
import SignIn from "./frontend/SignIn/SignIn.js";
import Register from "./frontend/Register/Register.js";
import MapDisplay from "./frontend/MapDisplay/MapDisplay.js";
import MainPage from "./frontend/MainPage/MainPage.js";
import Navigation from "./frontend/Navigation/Navigation.js";
import ReportLostPerson from "./frontend/ReportLostPerson/ReportLostPerson.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<ul className="App-header">
						<div>
							<Link to="/signin">
								<input type="submit" value="Police" />
							</Link>
						</div>
						<div>
							<Link to="/signin">
								<input type="submit" value="Civilian" />
							</Link>
						</div>
						<div>
							<Link to="/map">
								<input type="submit" value="Map Visualization" />
							</Link>
						</div>
					</ul>
					<Routes>
						<Route exact path="/" element={<MainPage />}></Route>
						<Route path="/signin" element={<SignIn />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/map" element={<MapDisplay />}></Route>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
