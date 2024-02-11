/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL, withRouter } from "../constants.js";
import "./ReportLostPerson.css";

class ReportLostPerson extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: props.userType,
			first_name: "",
			last_name: "",
			age: "",
			height: "",
			weight: "",
			last_latitude: "",
			last_longitude: "",
			radius: "",
			photo: "",
			award: "",
			date: "",
			description: ""
		};
	}

	onFirstNameChange = event => {
		this.setState({ first_name: event.target.value });
	};

	onLastNameChange = event => {
		this.setState({ last_name: event.target.value });
	};

	onAgeChange = event => {
		this.setState({ age: event.target.value });
	};

	onHeightChange = event => {
		this.setState({ height: event.target.value });
	};

	onWeightChange = event => {
		this.setState({ weight: event.target.value });
	};

	onLatitudeChange = event => {
		this.setState({ last_latitude: event.target.value });
	};

	onLongitudeChange = event => {
		this.setState({ last_longitude: event.target.value });
	};

	onRadiusChange = event => {
		this.setState({ radius: event.target.value });
	};

	onPhotoChange = event => {
		this.setState({ photo: event.target.value });
	};

	onAwardChange = event => {
		this.setState({ award: event.target.value });
	};

	onDateChange = event => {
		this.setState({ date: event.target.value });
	};

	onDescriptionChange = event => {
		this.setState({ description: event.target.value });
	};

	onSubmitReport = async () => {
		const { token } = this.props;
		const resp = await fetch(BACKEND_URL + "/api/upload_report", {
			method: "post",
			headers: { "Content-Type": "application/json", authorization: token },
			body: JSON.stringify({
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				age: this.state.age,
				height: this.state.height,
				weight: this.state.weight,
				last_latitude: this.state.last_latitude,
				last_longitude: this.state.last_longitude,
				radius: this.state.radius,
				// address: this.state.address,
				// last_location: this.state.last_location,
				photo: this.state.photo,
				award: this.state.award,
				date: Math.floor(this.state.date / 1000),
				description: this.state.description
			})
		});

		const json = await resp.json();
		if (resp.status === 200) {
			console.log(json);
			this.props.router.navigate("/map");
		} else {
			alert(`Error! ${json.error}`);

			// Clear state
			this.setState({
				first_name: "",
				last_name: "",
				age: "",
				height: "",
				weight: "",
				last_latitude: "",
				last_longitude: "",
				radius: "",
				photo: "",
				award: "",
				date: "",
				description: ""
			});
		}
	};

	render() {
		return (
			<div className="background-RLP">
				<h1>Report Lost Person</h1>
				<section id="main">
					<div className="container-report">
						<div>
							<label htmlFor="first_name">First Name</label>
							<input type="text" onChange={this.onFirstNameChange} />
						</div>
						<div>
							<label htmlFor="last_name">Last Name</label>
							<input type="text" onChange={this.onLastNameChange} />
						</div>
						<div>
							<label htmlFor="age">Age</label>
							<input type="number" onChange={this.onAgeChange} />
						</div>
						<div>
							<label htmlFor="height">Height</label>
							<input type="text" onChange={this.onHeightChange} />
						</div>
						<div>
							<label htmlFor="weight">Weight</label>
							<input type="text" onChange={this.onWeightChange} />
						</div>

						<div>
							<label htmlFor="last_latitude">Last Seen Latitude</label>
							<input type="text" onChange={this.onLatitudeChange} />
						</div>
						<div>
							<label htmlFor="last_longitude">Last Seen Longitude</label>
							<input type="text" onChange={this.onLongitudeChange} />
						</div>
						<div>
							<label htmlFor="radius">Photo</label>
							<input type="number" onChange={this.onRadiusChange} />
						</div>
						<div>
							<label htmlFor="photo">Photo</label>
							<input id ="photo" type="file" onChange={this.onPhotoChange} />
						</div>
						<div>
							<label htmlFor="award">Reward</label>
							<input type="number" onChange={this.onAwardChange} />
						</div>
						<div>
							<label htmlFor="date">Date</label>
							<input type="date" onChange={this.onDateChange} />
						</div>
						<div>
							<label htmlFor="description">Description</label>
							<textarea
								name="description"
								id="description"
								onChange={this.onDescriptionChange}></textarea>
						</div>
					</div>
					<div>
						<button type="submit" onClick={this.onSubmitReport}>
							Submit
						</button>
					</div>
					<div>
						<Link to="/map">
							<p>Back</p>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}


const _test = withRouter(ReportLostPerson)
console.log(_test)
export default _test;
