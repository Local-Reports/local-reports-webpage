import React from "react";

class ReportLostPerson extends React.Component {
	render() {
		return (
			<div>
				<div>Report Lost Person</div>
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
		);
	}
}

export default ReportLostPerson;
