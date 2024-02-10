import React from "react";

class Register extends React.Component {
	render() {
		return (
			<div>
				<div>Register</div>
				<div>
					<label htmlFor="name">First Name</label>
					<input type="text" name="name" id="name" />
				</div>
				<div>
					<label htmlFor="name">Last Name</label>
					<input type="text" name="name" id="name" />
				</div>
				<div>
					<label htmlFor="email-address">Email</label>
					<input type="email" name="email-address" id="email-address" />
				</div>
				<div>
					<label htmlFor="email-address">Badge's Number</label>
					<input type="number" name="badge-number" id="badge-number" />
				</div>
				<div>
					<label htmlFor="county">County</label>
					<input type="text" name="county" id="county" />
				</div>
				<div>
					<label htmlFor="phone-number">Phone Number</label>
					<input
						type="tel"
						name="phone-number"
						id="phone-number"
						placeholder="Phone Number"
					/>
				</div>
				<div>
					<label htmlFor="address">Address</label>
					<textarea
						name="address"
						id="address"
						placeholder="Address"></textarea>
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</div>
		);
	}
}

export default Register;
