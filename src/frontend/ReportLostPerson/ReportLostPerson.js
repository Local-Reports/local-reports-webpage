import React from "react";
import { Link } from "react-router-dom";

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
			address: "",
			last_location: "",
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

	onAddressChange = event => {
		this.setState({ address: event.target.value });
	};

	onLastLocationChange = event => {
		this.setState({ last_location: event.target.value });
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

	onSubmitReport = () => {
		fetch("http://localhost:3000/report-information", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				age: this.state.age,
				height: this.state.height,
				weight: this.state.weight,
				address: this.state.address,
				last_location: this.state.last_location,
				photo: this.state.photo,
				award: this.state.award,
				date: this.state.date,
				description: this.state.description
			})
		}).then(response => response.json());
	};

	render() {
		return (
			<div>
				<div className="title">Report Lost Person</div>
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
						<label htmlFor="address">Address</label>
						<input type="text" onChange={this.onAddressChange} />
					</div>
					<div>
						<label htmlFor="last_location">Last Location Seen</label>
						<input type="text" onChange={this.onLastLocationChange} />
					</div>
					<div>
						<label htmlFor="photo">Photo</label>
						<input type="file" onChange={this.onPhotoChange} />
					</div>
					<div>
						<label htmlFor="award">Award</label>
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
							onChange={this.onAddressChange}></textarea>
					</div>
				</div>
				<div>
					<Link to="/map">
						<input
							type="submit"
							value="Submit"
							onClick={this.onSubmitReport}
						/>
					</Link>
				</div>
			</div>
		);
	}
}

export default ReportLostPerson;
