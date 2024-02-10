
import React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "@vis.gl/react-google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
	const defaultProps = {
		center: {
			lat: 33.948006,
			lng: -83.377319
		},
		zoom: 11
	};

	

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded=
				{/* {({ map, maps }) => handleApiLoaded(map, maps)} */}
				<AnyReactComponent lat={5} lng={3} text="My Marker" />
				{/* <Marker position={defaultProps.center}></Marker> */}
				<Marker
					lat={defaultProps.center.lat}
					lng={defaultProps.center.lng}
					text="My Marker"
				/>
			</GoogleMapReact>
		</div>
	);



	
}
// /** @format */

//Start of Working

// import React, { useRef, useCallback } from 'react';
// import { GoogleMap, useLoadScript, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
// import { Link } from "react-router-dom";
// import GoogleMapReact from "google-map-react";
// import { Loader } from "@googlemaps/js-api-loader";

// const libraries = ["places"];
// const mapContainerStyle = {
// 	width: "100vw",
// 	height: "50vh"
// };
// const center = {
// 	// UGA Coordinates
// 	lat: 33.948006, // default latitude
// 	lng: -83.377319 // default longitude
// };

// const pos1 = {
// 	// UGA Coordinates
// 	lat: 32.948006, // default latitude
// 	lng: -81.377319 // default longitude
// };

// const App = () => {
// 	const { isLoaded, loadError } = useLoadScript({
// 		googleMapsApiKey: "AIzaSyCl3bgJ3nNwwT86ZvTFHTymCgQwROaXNPw",
// 		libraries
// 	});

// 	const mapRef = useRef();
// 	const onMapLoad = useCallback((map) => {
// 		mapRef.current = map;
// 	}, []);

//  const panTo = useCallback((val) =>
//  {
//   const lat = val.latLng.lat()
//   const lng = val.latLng.lng()
//   mapRef.current.panTo({lat, lng});
//   mapRef.current.setZoom(20);
//  }, []);

// 	if (loadError) {
// 		return <div>Error loading maps</div>;
// 	}

// 	if (!isLoaded) {
// 		return <div>Loading maps</div>;
// 	}

// 	return (
// 		<div>
// 			<div>
// 				<ul>
// 					<Link to="/report">Report</Link>
// 				</ul>
// 			</div>
// 			<Autocomplete>
// 				<input
// 					type="text"
// 					placeholder="Enter a location"
// 					style={{
// 						width: "300px",
// 						height: "40px",
// 						paddingLeft: "10px",
// 						marginTop: "10px",
// 						marginBottom: "10px"
// 					}}
// 				/>
// 			</Autocomplete>
// 			<GoogleMap
// 				onLoad={onMapLoad}
// 				mapContainerStyle={mapContainerStyle}
// 				zoom={10}
// 				center={center}>
// 				<Marker position={center} onClick={panTo} />
// 				<Marker position={center} onClick={panTo} />
// 				<Marker position={center} onClick={panTo} />

// 				{/* <Marker position={pos1} onClick={panTo} /> */}
// 			</GoogleMap>
// 		</div>
// 	);
// };

// export default App;

// End of Working

// Initialize and add the map
// let map;
// let marker1;
// let geocoder;
// let responseDiv;
// let response;
//  const loader = new Loader({
// 		apiKey: "AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4",
// 		version: "weekly"
//  });
