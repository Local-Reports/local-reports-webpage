/** @format */

import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: props.userType,
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

		const response = await fetch("http://localhost:3000/register", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		
		const json = await response.json();
	};

	render() {
		const { userType } = this.props;

		return (
			<div className="container">
				{/* <div>Register for an Account</div> */}
				<div>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						name="first_name"
						id="first_name"
						onChange={this.onFirstNameChange}
					/>
				</div>
				<div>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						name="last_name"
						id="last_name"
						onChange={this.onLastNameChange}
					/>
				</div>
				<div>
					<label htmlFor="email-address">Email</label>
					<input
						type="email"
						name="email-address"
						id="email-address"
						onChange={this.onEmailChange}
					/>
				</div>
				<div>
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
						<div>
							<label htmlFor="badge-number">Badge's Number</label>
							<input
								type="number"
								name="badge-number"
								id="badge-number"
								onChange={this.onBadgeNumberChange}
							/>
						</div>
						<div>
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
						<div>
							<label htmlFor="phone-number">Phone Number</label>
							<input
								type="tel"
								name="phone-number"
								id="phone-number"
								onChange={this.onPhoneNumberChange}
							/>
						</div>
						<div>
							<label htmlFor="areaCode">Area Code</label>
							<input
								type="text"
								id="areaCode"
								name="areaCode"
								onChange={this.onAreaCodeChange}
							/>
						</div>
						<div>
							<label htmlFor="address">Address</label>
							<textarea
								name="address"
								id="address"
								onChange={this.onAddressChange}></textarea>
						</div>
					</>
				)}
				<div>
					<Link to="/signin">
						<input
							type="submit"
							value="Register"
							onClick={this.onSubmitRegister}
						/>
					</Link>
				</div>
			</div>
		);
	}
}

export default Register;
