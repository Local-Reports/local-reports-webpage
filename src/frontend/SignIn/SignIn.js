/** @format */

import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: "",
			signInPassword: ""
		};
	}

	onEmailChange = event => {
		this.setState({ signInEmail: event.target.value });
	};

	onPasswordChange = event => {
		this.setState({ signInPassword: event.target.value });
	};

	onSubmitSignIn = () => {

	};

	render() {
		const { userType } = this.props;

		return (
			<div>
				<div>Sign In</div>
				<div>
					<label htmlFor="email-address">Email</label>
					<input
						type="email"
						name="email-address"
						id="email-address"
						placeholder="Email"
						onChange={this.onEmailChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						onChange={this.onPasswordChange}
					/>
				</div>
				<div>
					<Link to="/map">
						<input type="submit" value="Sign in" />
					</Link>
				</div>
				<div>
					<ul>
						<Link to="/register">Register</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default SignIn;
