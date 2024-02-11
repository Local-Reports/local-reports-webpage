/** @format */

import React from "react";
import {BACKEND_URL, withRouter} from "../constants.js";
import { Link, useNavigate } from "react-router-dom";
import "./ReportInformation.css";


class ReportInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: props.userType,
			first_name: "",
			last_name: "",
			age: "",
			height: "",
			weight: "",
			lat: "",
			lng: "",
			last_location: "",
			photo: "",
			date: "",
			parent_id: "",
			whereSeeLocation: ""
		};

		this.setState({parent_id: this.props.router.location.state.id})
		console.log('here')
	}	

	componentDidMount() {
		const id = this.props.router.location.state.id;
		console.log('checking', id)
		this.loadInformation(id);
	}

	loadInformation = async (id) => {
		const { token } = this.props;

		if (token == null) {
			return;
		}
		
		const resp = await fetch(BACKEND_URL + "/api/get_report/" + id, {
			method: "GET",
			headers: {"authorization": token}
		});
		const userData = await resp.json();
		if (resp.status === 200) {
			this.setState({
				photo: userData.photo,
				first_name: userData.first_name,
				last_name: userData.last_name,
				age: userData.age,
				height: userData.height,
				weight: userData.weight,
				lat: userData.lat,
				lng: userData.lng,
				date: userData.date,
				parent_id: userData.parent_id,
				last_location: userData.last_location
			});
		} else {
			alert(`Error! ${userData.error}`);
		}
	};

	onSubmitWhereSeeLocation = async () => {
		const { token } = this.props;

		if (token == null) {
			return;
		}
		const currentDate = Math.floor(Date.now() / 1000);

		const resp = await fetch(BACKEND_URL + "/api/upload_sighting", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: token
			},
			body: JSON.stringify({
				photo: this.state.photo,
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				age: this.state.age,
				height: this.state.height,
				weight: this.state.weight,
				lat: this.state.lat,
				lng: this.state.lng,
				last_location: this.state.last_location,
				date: currentDate - this.state.date,
				parent_id: this.props.router.location.state.id,
				whereSeeLocation: this.state.whereSeeLocation
			})
		});

		const json = await resp.json();
		if (resp.status === 200) {
			// console.log("Submit Where See Location", json);
			this.props.router.navigate('/map')
		} else {
			alert(`Error! ${json.error}`);
		}
	};

	handleChange = (event) => {
		this.setState({whereSeeLocation: event.target.value});
	  }

	render() {
		return (
			<div>
				<h1>Report Information</h1>
				<div className="border" id="info">
					<div>
						<label htmlFor="photo">Photo: {this.state.photo}</label>
					</div>
					<div>
						<label htmlFor="first_name">
							First Name: {this.state.first_name}
						</label>
					</div>
					<div>
						<label htmlFor="last_name">Last Name: {this.state.last_name}</label>
					</div>
					<div>
						<label htmlFor="age">Age: {this.state.age}</label>
					</div>
					<div>
						<label htmlFor="height">Height: {this.state.height}</label>
					</div>
					<div>
						<label htmlFor="weight">Weight: {this.state.weight}</label>
					</div>
					<div>
						<label htmlFor="address">Latitude: {this.state.lat}</label>
					</div>
					<div>
						<label htmlFor="address">Longitude: {this.state.lng}</label>
					</div>
					<div>
						<label htmlFor="last_location">
							Last Location Seen: {this.state.last_location}
						</label>
					</div>
				</div>
				<div>
					<label htmlFor="address">Where did you see this person?</label>
					<textarea id="prompt-area" value={this.state.whereSeeLocation} onChange={this.handleChange}></textarea>
				</div>
				<div>
					<button type="submit" onClick={this.onSubmitWhereSeeLocation}>
						Submit
					</button>
				</div>
				<div>
					<Link to="/map">
						<p>Back</p>
					</Link>
				</div>
			</div>
		);
	}
}

const _test = withRouter(ReportInformation)
export default _test;
