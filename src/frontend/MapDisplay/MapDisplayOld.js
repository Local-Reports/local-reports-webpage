/** @format */

"use client";
import { BACKEND_URL } from "../constants.js";
import { useState, useEffect } from "react";
import useSWR from "swr";
import "./map.css";
import kid from "./african_orphan_child_400x400.jpg";
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng
} from "use-places-autocomplete";
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Pin,
	InfoWindow
} from "@vis.gl/react-google-maps";
import { Link } from "react-router-dom";

// Fetch data from api
// const fetcher = (...args) => fetch(...args).then(res => res.json());
// const Swr = () => {
//   const {
//     lng: longitude,
//					lat: latitud
//   } = useSWR(!INSERT HTTP HERE!, fetcher);

//   // Handles error and loading state
//   if (error) return <div className='failed'>failed to load</div>;
//   if (isValidating) return <div className="Loading">Loading...</div>;

//   return (
//     <div>
//       {Lat && Long }
//
//     </div>
//   );
// };

// export default Swr;
//

export default function Intro({ userType }) {
	/**
	 * @type {(distance: number, age: number, type: 'civil' | 'police') => any[]} test
	 */
	const fetchReportData = async (dist, age, type) => {
		const token = this.props.token;

		const url = `${BACKEND_URL}/api/get_reports/?distance=${dist}&age=${age}&type=${type}`;
		const resp = await fetch(url, { headers: { authorization: token } });

		if (resp.status !== 200) {
			console.error("invalid database query");
			return [];
		}

		const { reports } = await resp.json();

		return reports;
	};

	const PlacesAutocomplete = ({ setSelected }) => {
		const {
			ready,
			value,
			setValue,
			suggestions: { status, data },
			clearSuggestions
		} = usePlacesAutocomplete();
	};
	const position = { lat: 53.43, lng: 10 };
	// const yourMomsHouse = { lat: 53.43, lng: -83.36 };

	const [open, setOpen] = useState(false);
	const [setSelected] = useState(false);

	return (
		<div>
			<div>
				<ul>
					<Link to="/report">Report</Link>
				</ul>
			</div>
			<div>
				<ul>
					{userType === "map" ? (
						<Link to="/">Main Page</Link>
					) : (
						<Link to="/signin">Main Page</Link>
					)}
				</ul>
			</div>

			<APIProvider apiKey="AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4">
				{/* <div className="places-container">
				<PlacesAutocomplete setSelected={setSelected} />
			</div> */}

				<div className="map-full">
					<Map center={position} mapId={"5743bb516df58986"}>
						{/* <AdvancedMarker position={position} onClick={() => setOpen(true)}>
							<Pin
								background={"grey"}
								borderColor={"green"}
								glyphColor={"purple"}></Pin>
						</AdvancedMarker>

						{open && (
							<InfoWindow
								position={position}
								onCloseClick={() => setOpen(false)}>
								<p className="icontext">Jay's new crib</p>
							</InfoWindow>
						)} */}
					</Map>
				</div>
			</APIProvider>
		</div>
	);
}

// /** @format */

// import React from "react";
// import {GoogleMapReact, Marker} from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap() {
// 	const defaultProps = {
// 		center: {
// 			lat: 10.99835602,
// 			lng: 77.01502627
// 		},
// 		zoom: 11
// 	};

// 	const handleApiLoaded = (map, maps) => {
// 		new maps.Marker({
// 			position: {
// 				lat: 10.99835602,
// 				lng: 77.01502627
// 			},
// 			map
// 		});
// 	};

// 	return (
// 		// Important! Always set the container height explicitly
// 		<div style={{ height: "100vh", width: "100%" }}>
// 			<GoogleMapReact
// 				bootstrapURLKeys={{ key: "YOUR_API_KEY_HERE" }}
// 				defaultCenter={defaultProps.center}
// 				defaultZoom={defaultProps.zoom}
// 				yesIWantToUseGoogleMapApiInternals
// 				onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
// 				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
// 			</GoogleMapReact>
// 		</div>
// 	);
// }

// //export default App;
// // /** @format */

// // import React from "react";
// // import {GoogleMapReact, Marker, map,maps} from "google-map-react";

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// // const handleApiLoaded = (map, maps) =>
// // {

// // 	<Marker
// // 	position = {{
// // 		lat: 10.99835602,
// // 		lng: 77.01502627
// // 	}}
// // />
// // };

// // export default function SimpleMap() {
// // 	const defaultProps = {
// // 		center: {
// // 			lat: 10.99835602,
// // 			lng: 77.01502627
// // 		},
// // 		zoom: 11

// // 	};

// // 	return (
// // 		// Important! Always set the container height explicitly
// // 		<div style={{ height: "100vh", width: "100%" }}>
// // 			<GoogleMapReact
// // 				bootstrapURLKeys={{ key: "AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4" }}
// // 				defaultCenter={defaultProps.center}
// // 				defaultZoom={defaultProps.zoom}>
// // 				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
// // 			</GoogleMapReact>

// // 		</div>
// // 	);
// // }
// // /** @format */

// //Start of Working

// // import React, { useRef, useCallback } from 'react';
// // import { GoogleMap, useLoadScript, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
// // import { Link } from "react-router-dom";
// // import GoogleMapReact from "google-map-react";
// // import { Loader } from "@googlemaps/js-api-loader";

// // const libraries = ["places"];
// // const mapContainerStyle = {
// // 	width: "100vw",
// // 	height: "50vh"
// // };
// // const center = {
// // 	// UGA Coordinates
// // 	lat: 33.948006, // default latitude
// // 	lng: -83.377319 // default longitude
// // };

// // const pos1 = {
// // 	// UGA Coordinates
// // 	lat: 32.948006, // default latitude
// // 	lng: -81.377319 // default longitude
// // };

// // const App = () => {
// // 	const { isLoaded, loadError } = useLoadScript({
// // 		googleMapsApiKey: "AIzaSyCl3bgJ3nNwwT86ZvTFHTymCgQwROaXNPw",
// // 		libraries
// // 	});

// // 	const mapRef = useRef();
// // 	const onMapLoad = useCallback((map) => {
// // 		mapRef.current = map;
// // 	}, []);

// //  const panTo = useCallback((val) =>
// //  {
// //   const lat = val.latLng.lat()
// //   const lng = val.latLng.lng()
// //   mapRef.current.panTo({lat, lng});
// //   mapRef.current.setZoom(20);
// //  }, []);

// // 	if (loadError) {
// // 		return <div>Error loading maps</div>;
// // 	}

// // 	if (!isLoaded) {
// // 		return <div>Loading maps</div>;
// // 	}

// // 	return (
// // 		<div>
// // 			<div>
// // 				<ul>
// // 					<Link to="/report">Report</Link>
// // 				</ul>
// // 			</div>
// // 			<Autocomplete>
// // 				<input
// // 					type="text"
// // 					placeholder="Enter a location"
// // 					style={{
// // 						width: "300px",
// // 						height: "40px",
// // 						paddingLeft: "10px",
// // 						marginTop: "10px",
// // 						marginBottom: "10px"
// // 					}}
// // 				/>
// // 			</Autocomplete>
// // 			<GoogleMap
// // 				onLoad={onMapLoad}
// // 				mapContainerStyle={mapContainerStyle}
// // 				zoom={10}
// // 				center={center}>
// // 				<Marker position={center} onClick={panTo} />
// // 				<Marker position={center} onClick={panTo} />
// // 				<Marker position={center} onClick={panTo} />

// // 				{/* <Marker position={pos1} onClick={panTo} /> */}
// // 			</GoogleMap>
// // 		</div>
// // 	);
// // };

// // export default App;

// // End of Working

// // Initialize and add the map
// // let map;
// // let marker1;
// // let geocoder;
// // let responseDiv;
// // let response;
// //  const loader = new Loader({
// // 		apiKey: "AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4",
// // 		version: "weekly"
// //  });
