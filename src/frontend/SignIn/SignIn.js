/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL, withRouter } from "../constants.js";

import './SignIn.css'
// import vid1 from "./back.mp4";



class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userType: props.userType || "civilian",
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

	onSubmitSignIn = async () => {

		const {token} = this.props;


		const resp = await fetch(BACKEND_URL + "/api/login", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userType: this.state.userType,
				username: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})

		const json = await resp.json();
		if (resp.status === 200) {
			this.props.updateToken(json.token);
			this.props.router.navigate('/map');
			return;
		} else {
			alert(`Error! ${json.error}`);

			// Clear state
			this.setState({
				signInEmail: "",
				signInPassword: ""
			});
		}
	};

	render() {
		const { userType } = this.props;
		return (
			// <video src={vid1} autoPlay loop className="vidback"></video>
			
				<div>
					<h1>Sign In</h1>
					<div className="border">
						<div className="input-card">
							<label htmlFor="email-address">Email</label>
							<input
								type="email"
								name="email-address"
								id="email-address"
								placeholder="Email"
								onChange={this.onEmailChange}
							/>
						</div>
						<div className="input-card">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								onChange={this.onPasswordChange}
							/>
						</div>
						<div id="submitBtn">
							<button type="submit" onClick={this.onSubmitSignIn}>
								Sign in
							</button>
						</div>
						<div>
							<ul>
								<Link to="/register">
									<p>Register</p>
								</Link>
							</ul>
						</div>
						<div>
							<ul>
								<Link to="/">
									<p>Back</p>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			
		);
	}
}

const _test = withRouter(SignIn)
console.log('good', _test)
export default _test;
