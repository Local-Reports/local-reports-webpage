/** @format */

import React, { Fragment } from "react";
import {
	GoogleMap,
	LoadScript,
	MarkerF,
	InfoWindowF,
	CircleF
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "./map.css";
import kid from "./african_orphan_child_400x400.jpg";
import { Link } from "react-router-dom";
import { BACKEND_URL, withRouter } from "../constants.js";

// import { Loader } from "@googlemaps/js-api-loader";

// const loader = new Loader({
//   apiKey: "AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4"
// })

// let google;

//  loader.load().then((googl) => {
//   console.log(googl);
//   google = googl;
// })

const sad_kids = [
	{
		img_url:
			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
	},
	{
		img_url:
			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
	},
	{
		img_url:
			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
	},
	{
		img_url:
			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
	},
	{
		img_url:
			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
	},
	{
		img_url:
			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
	}
];

class GoogleMapShit extends React.Component {
	constructor(props) {
		super(props);

		this.defaultCoords = {
			lat: 33.957409,
			lng: -83.376801
		};
		this.currentPosition = {};
		this.selected = {};

		this.places = [];
		this.state = {
			distance: 50,
			age: 7,
			type: []
		};

		// const places = [
		// 	{
		// 		name: "Location 1",
		// 		location: {
		// 			lat: 33.9519,
		// 			lng: 83.3576
		// 		},
		// 		img_url:
		// 			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
		// 	},
		// 	{
		// 		name: "Location 2",
		// 		location: {
		// 			lat: 41.3917,
		// 			lng: 2.1649
		// 		},
		// 		img_url:
		// 			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
		// 	},
		// 	{
		// 		name: "Location 3",
		// 		location: {
		// 			lat: 41.3773,
		// 			lng: 2.1585
		// 		},
		// 		img_url:
		// 			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg",
		// 		circle: {
		// 			radius: 1000,
		// 			strokeColor: "#ff0000"
		// 		}
		// 	},
		// 	{
		// 		name: "Location 4",
		// 		location: {
		// 			lat: 41.3797,
		// 			lng: 2.1682
		// 		},
		// 		img_url:
		// 			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg",
		// 		circle: {
		// 			radius: 1000,
		// 			strokeColor: "#ff0000"
		// 		}
		// 	},
		// 	{
		// 		name: "Location 5",
		// 		location: {
		// 			lat: 41.4055,
		// 			lng: 2.1915
		// 		},
		// 		img_url:
		// 			"https://www.calmkidcentral.com/wp-content/uploads/2017/07/iStock-485139708.jpg"
		// 	}
		// ];
		this.fetchPlacesData().then(places => this.updatePlaces(places));
		// this.updatePlaces();
	}

	getPos = async () => {
		let { lat, lng } = await new Promise((res, rej) => {
			navigator.geolocation.getCurrentPosition(pos => {
				res({ lat: pos.coords.latitude, lng: pos.coords.longitude });
			});
			setTimeout(res, 1000, { ...this.defaultCoords });
		});
		return { lat, lng };
	};

	fetchPlacesData = async () => {
		const { token } = this.props;
		let { distance, age, type } = this.state;

		const { lat, lng } = await this.getPos();

		if (type.length === 2) type = [];
		if (type.length > 0) {
			type = type[0] === "type1" ? "POLICE" : "CIVIL";
		}

		if (token == null) {
			return;
		}

		let url = `${BACKEND_URL}/api/get_reports?lat=${lat}&lng=${lng}&distance=${distance}&age=${age}`;

		if (type.length > 0) {
			url += `&type=${type}`;
		}

		const resp = await fetch(url, {
			method: "GET",
			headers: {
				authorization: token
			}
		});

		const data = await resp.json();
		if (resp.status === 200) {
			const places = data.reports;
			console.log(places);
			if (places && places.length > 0) {
				places.forEach((place, i) => {
					if (place.lat && place.lng)
						place.location = {
							lat: place.lat,
							lng: place.lng
						};

					if (place.radius) {
						const color = place.type === "POLICE" ? "#0000ff" : "#ff0000";
						place.circle = {
							radius: place.radius,
							strokeColor: color
						};
					}

					place.img_url = sad_kids[i % sad_kids.length].img_url;
				});
				return places;
			}
		} else {
			alert(`Error! ${data.error}`);
		}
	};

	setCurrentPosition = position => {
		this.currentPosition = {
			lat: position.lat,
			lng: position.lng
		};
		this.forceUpdate();
	};

	setSelectedItem = item => {
		this.selected = item;
		console.log('selected', item)
		this.forceUpdate();
	};

	onInfoWindowClick = (e, item) => {
		if (e.target === item)
			this.props.router.navigate("/report-information", {
				reportId: e.targetReportId
			});
	};

	onMarkerDragEnd = event => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();
		this.setCurrentPosition({ lat, lng });
		this.forceUpdate();
	};

	/**
	 * @type {
	 *  (places: {
	 *    location: {
	 *      lat : number;
	 *      lng: number;
	 *    };
	 *    circle: {
	 *      radius: number,
	 *      options: {
	 *        strokeColor: number
	 *      }
	 *    };
	 *    label: {
	 *      name: string;
	 *      image: string;
	 *      targetReportId: string
	 *
	 *    }
	 *  }
	 *  ) => bool } places
	 */
	updatePlaces = places => {
		this.places = [];
		let i = 0;
		for (const place of places) {
			place.iid = i++;
			this.places.push(place);
		}

		this.forceUpdate();
	};

	onDistanceChange = event => {
		this.setState({ distance: event.target.value * 1000 }); // kilometers
	};

	onAgeChange = event => {
		this.setState({ age: event.target.value });
	};

	onTypeChange = event => {
		const { name, checked } = event.target;
		const { type } = this.state;

		let updatedTypes;
		if (checked) {
			updatedTypes = [...type, name];
		} else {
			updatedTypes = type.filter(t => t !== name);
		}

		console.log("updated", updatedTypes);
		this.setState({ type: updatedTypes });
	};

	onSubmit = async () => {
		let places = await this.fetchPlacesData();

		this.updatePlaces(places);
	};

	switch = async (item) => {
		this.setSelectedItem({});
		console.log('switching to item', item)
		this.props.router.navigate("/report-information", {
			state: {
				id: item.id
			}
		})
	}

	getMap() {
		return (
			<GoogleMap
				mapContainerClassName="map-canvas"
				center={this.defaultCoords}
				zoom={13}>
				{this.places.map(item => {
					return (
						item.location && (
							<Fragment key={item.iid}>
								{/* <MarkerF
											key={item.name}
											position={item.location}
											onClick={() => this.setSelectedItem(item)}
											onDragEnd={e => this.onMarkerDragEnd(e)}
											draggable={false}
										/> */}

								<MarkerF
									key={item.name}
									position={item.location}
									onClick={() => this.setSelectedItem(item)}
									onDragEnd={e => this.onMarkerDragEnd(e)}
									draggable={false}>
									{/* <InfoWindowF
												position={item.location}
												clickable={true}
												onCloseClick={() => this.setSelectedItem({})}>
												<div>
													<img
														src={item.img_url}
														className="kid_pic"
														// style={{ width: "100px" }}
														alt="sad_girl"
													/>
												</div>
											</InfoWindowF> */}
								</MarkerF>

								{item.circle && (
									<CircleF
										center={item.location}
										radius={item.circle.radius}
										options={{
											fillColor: item.circle.strokeColor,
											strokeColor: item.circle.strokeColor
										}}

										// options={item.circle.options}
									/>
								)}
								{this.selected.location && (
									<InfoWindowF
										position={this.selected.location}
										clickable={true}
										onCloseClick={() => this.setSelectedItem({})}>
										<p className="kid-name" onClick={() => this.switch(this.selected)}>
											hi
											<img
												src={item.img_url}
												className="kid_pic"
												alt="sad_girl"
											/>
										</p>
									</InfoWindowF>
								)}
							</Fragment>
						)
					);
				})}
			</GoogleMap>
		);
	}

	render() {
		const { distance, age, type } = this.props;

		return (
			<div>
				<h1 id="mapVisualize">Map Visualization</h1>
				<div className="bigBox">
					<div>
						<div className="input-card">
							<label htmlFor="distance">Distance(Kilometers)</label>
							<input
								type="text"
								name="distance"
								id="distance"
								onChange={this.onDistanceChange}
							/>
						</div>
						<div className="input-card">
							<label htmlFor="age">Range of Date from Now</label>
							<input
								type="text"
								name="age"
								id="age"
								onChange={this.onAgeChange}
							/>
						</div>
						<div className="checkbox-row">
							<label for="type1">Police</label>
							<input
								type="checkbox"
								id="type1"
								name="type1"
								value="Police"
								onChange={this.onTypeChange}
							/>
							<label for="type2">Civilian</label>
							<input
								type="checkbox"
								id="type2"
								name="type2"
								value="Civilian"
								onChange={this.onTypeChange}
							/>
						</div>
						<button type="submit" value="submit" onClick={this.onSubmit}>
							Submit
						</button>
					</div>
					<div className="navigation">
						<div>
							<Link to="/report">
								<button>New Report</button>
							</Link>
						</div>
						<div>
							<Link to="/report-information">
								<button>View Report</button>
							</Link>
						</div>
						<div>
							<Link to="/">
								<button>Return Home</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="googleMap">{this.getMap()}</div>
			</div>
		);
	}
}

const _test = withRouter(GoogleMapShit);
export default _test;
