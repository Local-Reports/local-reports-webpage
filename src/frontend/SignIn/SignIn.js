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

	onSubmitSignIn = () => {};

	render() {
		const { onRouteChange } = this.props;

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
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</div>
				<div>
					<input onClick={this.onSubmitSignIn} type="submit" value="Sign in" />
				</div>
				<div>
					<p onClick={() => onRouteChange("register")}>Register</p>
					<ul>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SignIn;
