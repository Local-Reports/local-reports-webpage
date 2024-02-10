import React, { Component } from "react";
import "./App.css";
import TypePerson from "./frontend/TypePerson/TypePerson.js";
import SignIn from "./frontend/SignIn/SignIn.js";
import Register from "./frontend/Register/Register.js";
import MainPage from "./frontend/MainPage/MainPage.js";
import Navigation from "./frontend/Navigation/Navigation.js";
import ReportLostPerson from "./frontend/ReportLostPerson/ReportLostPerson.js";

const initialState = {
	type: "none",
	route: "main"
};

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onRouteChange = route => {
		this.setState({ route: route });
	};

	render() {
		const { type, route } = this.state;

		let content;
		if (route === "main") {
			content = <MainPage onRouteChange={this.onRouteChange} />;
		} else if (route === "police" || route === "civilian") {
			content = <SignIn />;
		} else if (route === "map") {
	
		}

		return <div className="App">{content}</div>;
	}
}

export default App;
