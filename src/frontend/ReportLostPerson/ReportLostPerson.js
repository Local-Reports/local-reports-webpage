import React from "react";
import { Link } from "react-router-dom";


class ReportLostPerson extends React.Component {
	render() {
		return (
			<div>
				<div className="title">Report Lost Person</div>
				<div className="container-report">
					<div>
						<label>First Name</label>
						<input type="text" />
					</div>
					<div>
						<label>Last Name</label>
						<input type="text" />
					</div>
					<div>
						<label>Age</label>
						<input type="number" />
					</div>
					<div>
						<label>Height</label>
						<input type="text" />
					</div>
					<div>
						<label>Weight</label>
						<input type="text" />
					</div>
					<div>
						<label>Address</label>
						<input type="text" />
					</div>
					<div>
						<label>Last Location Seen</label>
						<input type="text" />
					</div>
					<div>
						<label>Picture</label>
						<input type="file" />
					</div>
					<div>
						<label>Award</label>
						<input type="number" />
					</div>
					<div>
						<label>Date</label>
						<input type="date" />
					</div>
					<div>
						<label>Description</label>
						<textarea />
					</div>
				</div>
				<div>
					<Link to="/map">
						<input type="submit" value="Submit" />
					</Link>
				</div>
			</div>
		);
	}
}

export default ReportLostPerson;
