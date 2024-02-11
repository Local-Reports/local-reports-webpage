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

import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	HStack,
	IconButton,
	Input,
	SkeletonText,
	Text
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
	DirectionsRenderer
} from "@react-google-maps/api";


	import { Link } from "react-router-dom";


export default function Intro({ userType }) {
	const position = { lat: 53.54, lng: 10 };
	const [open, setOpen] = useState(false);

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

			<APIProvider apiKey="AIzaSyBGNeut_skfFi5jKeAEzy3zrRp45RvcNf4" region="">
				<div id="container">
					<Map
						zoom={9}
						center={position}
						mapId="5743bb516df58986"
						className="map-canvas">
						<AdvancedMarker position={position} onClick={() => setOpen(true)}>
							<Pin
								background={"grey"}
								borderColor={"green"}
								glyphColor={"purple"}
							/>
						</AdvancedMarker>

						{open && (
							<InfoWindow
								position={position}
								onCloseClick={() => setOpen(false)}>
								<p>I'm in Hamburg</p>
							</InfoWindow>
						)}
					</Map>
				</div>
			</APIProvider>
		</div>
	);
}


// export default function Intro({ userType })
// {
//  /**
//   * @type {(distance: number, age: number, type: 'civil' | 'police') => any[]} test
//   */
//  const fetchReportData = async (dist, age, type) =>
//  {
//   const token = this.props.token;

//   const url = `${BACKEND_URL}/api/get_reports/?distance=${dist}&age=${age}&type=${type}`;
//   const resp = await fetch(url, { headers: { authorization: token } });

//   if (resp.status !== 200)
//   {
//    console.error("invalid database query");
//    return [];
//   }

//   const { reports } = await resp.json();

//   return reports;
//  };
// }




