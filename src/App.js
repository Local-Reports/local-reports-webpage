import React, { Component } from "react";
import "./App.css";
import TypePerson from "./frontend/TypePerson/TyperPerson";
import SignIn from "./frontend/SignIn/SignIn";
import Register from "./frontend/Register/Register";
import MapDisplay from "./frontend/MapDisplay/MapDisplay";
import MainPage from "./frontend/MainPage/MainPage";
import Navigation from "./frontend/Navigation/Navigation";
import ReportLostPerson from "./frontend/ReportLostPerson/ReportLostPerson";

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
			content = <MapDisplay />;
		}

		return <div className="App">{content}</div>;
	}
}

export default App;
