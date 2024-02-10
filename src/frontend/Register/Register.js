/** @format */

import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			badge_number: "", // For police
			county: "", // For police
			phone_number: "", // For civilian
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

	onAddressChange = event => {
		this.setState({ address: event.target.value });
	};

	onSubmitRegister = () => {
		
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
						name="name"
						id="name"
						onChange={this.onFirstNameChange}
					/>
				</div>
				<div>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						name="name"
						id="name"
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
								placeholder="Phone Number"
								onChange={this.onPhoneNumberChange}
							/>
						</div>
						<div>
							<label htmlFor="address">Address</label>
							<textarea
								name="address"
								id="address"
								placeholder="Address"
								onChange={this.onAddressChange}></textarea>
						</div>
					</>
				)}
				<div>
					<Link to="/signin">
						<input type="submit" value="Register" />
					</Link>
				</div>
			</div>
		);
	}
}

export default Register;
