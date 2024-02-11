/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL, withRouter } from "../constants.js";

import "./Register.css";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: props.userType || "civilian",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			badge_number: "", // For police
			county: "", // For police
			phone_number: "", // For civilian
			area_code: "", // For civilian
			address: "" // For civilian
		};
	}

	onFirstNameChange = event => {
		this.setState({ first_name: event.target.value });
	};

	onLastNameChange = event => {
		this.setState({ last_name: event.target.value });
	};

	onEmailChange = event => {
		this.setState({ email: event.target.value });
	};

	onPasswordChange = event => {
		this.setState({ password: event.target.value });
	};

	onBadgeNumberChange = event => {
		this.setState({ badge_number: event.target.value });
	};

	onCountyChange = event => {
		this.setState({ county: event.target.value });
	};

	onPhoneNumberChange = event => {
		this.setState({ phone_number: event.target.value });
	};

	onAreaCodeChange = event => {
		this.setState({ area_code: event.target.value });
	};

	onAddressChange = event => {
		this.setState({ address: event.target.value });
	};

	onSubmitRegister = async () => {
		let body = {
			userType: this.state.userType,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			username: this.state.email,
			password: this.state.password
		};

		if (this.state.userType === "police") {
			body = {
				...body,
				badge_number: this.state.badge_number,
				county: this.state.county
			};
		} else if (this.state.userType === "civilian") {
			body = {
				...body,
				phone_number: this.state.phone_number,
				area_code: this.state.area_code,
				address: this.state.address
			};
		}

		console.log(BACKEND_URL + "/api/register", body);
		const response = await fetch(BACKEND_URL + "/api/register", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			},
			body: JSON.stringify(body)
		});

		const json = await response.json();
		if (response.status === 200) {
			if (json.token) {
				this.props.updateToken(json.token);
				this.props.router.navigate("/signin");
				return;
			}
		} else {
			alert(`Error! ${json.error}`);

			// Clear state
			this.setState({
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				badge_number: "",
				county: "",
				phone_number: "",
				area_code: "",
				address: ""
			});
		}
	};

	render() {
		const { userType } = this.props;

		return (
			<div>
				<h1>Register Information</h1>
				<div className="border" id="register">
					<div className="input-card">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							name="first_name"
							id="first_name"
							onChange={this.onFirstNameChange}
						/>
					</div>
					<div className="input-card">
						<label htmlFor="last_name">Last Name</label>
						<input
							type="text"
							name="last_name"
							id="last_name"
							onChange={this.onLastNameChange}
						/>
					</div>
					<div className="input-card">
						<label htmlFor="email-address">Email</label>
						<input
							type="email"
							name="email-address"
							id="email-address"
							onChange={this.onEmailChange}
						/>
					</div>
					<div className="input-card">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							onChange={this.onPasswordChange}
						/>
					</div>
					{/* Additional fields for police */}
					{userType === "police" && (
						<>
							<div className="input-card">
								<label htmlFor="badge-number">Badge's Number</label>
								<input
									type="text"
									className="badge-number"
									name="badge-number"
									id="badge-number"
									onChange={this.onBadgeNumberChange}
								/>
							</div>
							<div className="input-card">
								<label htmlFor="county">County</label>
								<input
									type="text"
									name="county"
									id="county"
									onChange={this.onCountyChange}
								/>
							</div>
						</>
					)}
					{/* Additional fields for civilian */}
					{userType === "civilian" && (
						<>
							<div className="input-card">
								<label htmlFor="phone-number">Phone Number</label>
								<input
									type="tel"
									name="phone-number"
									id="phone-number"
									onChange={this.onPhoneNumberChange}
								/>
							</div>
							<div className="input-card">
								<label htmlFor="areaCode">Area Code</label>
								<input
									type="text"
									id="areaCode"
									name="areaCode"
									onChange={this.onAreaCodeChange}
								/>
							</div>
							<div className="input-card">
								<label htmlFor="address">Address</label>
								<input
									name="address"
									id="address"
									onChange={this.onAddressChange}></input>
							</div>
						</>
					)}
				</div>

				<div id="registerBtn">
					<button
						type="submit"
						value="Register"
						onClick={this.onSubmitRegister}>
						Register
					</button>
				</div>
				<div>
					<Link to="/signin">
						<p>Back</p>
					</Link>
				</div>
			</div>
		);
	}
}

const _test = withRouter(Register);
export default _test;
