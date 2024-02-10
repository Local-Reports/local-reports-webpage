import React from "react";
import TypePerson from "../TypePerson/TyperPerson";

class MainPage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<input type="submit" value="Police" />
				</div>
				<div>
					<input type="submit" value="Civilian" />
				</div>
				<div>
					<input type="submit" value="Map Visualization" />
				</div>
			</div>
		);
	}
}

export default MainPage;
