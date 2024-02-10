// /** @format */


import React, { useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader";


const libraries = ["places"];
const mapContainerStyle = {
	width: "100vw",
	height: "100vh"
};
const center = {
	lat: 7.715, // default latitude
	lng: 80.6337262 // default longitude
};


const ps1 = {
 lat: 6.15,
 lng: 80.86
}


const App = () => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyCl3bgJ3nNwwT86ZvTFHTymCgQwROaXNPw",
		libraries
	});

	const mapRef = useRef();
	const onMapLoad = useCallback((map) => {
		mapRef.current = map;
	}, []);

 const panTo = useCallback((val) =>
 {
  const lat = val.latLng.lat()
  const lng = val.latLng.lng()
  mapRef.current.panTo({lat, lng});
		mapRef.current.setZoom(14);

		
 }, []);
 
 

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded) {
		return <div>Loading maps</div>;
	}

	return (
		<div>
			<div>
				<ul>
					<Link to="/report">Report</Link>
				</ul>
			</div>
			<Autocomplete>
				<input
				type="text"
				placeholder="Enter a location"
				style={{
					width: '300px',
					height: '40px',
					paddingLeft: '10px',
					marginTop: '10px',
					marginBottom: '10px',
				}}
				/>
			</Autocomplete>
   <GoogleMap
    onLoad={onMapLoad}
				mapContainerStyle={mapContainerStyle}
				zoom={10}
				center={center}>
				<Marker position={center} onClick={panTo} />
			</GoogleMap>
		</div>
	);
};

// 

/** @format */





/** @format */

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

export default App;

// async function initMap() {
// 	// The location of Uluru
//   // const position = { lat: -25.344, lng: 131.031 };
//   const Macon = { lat: 32.83609, lng: -83.631653 };

// 	// Request needed libraries.
//  //@ts-ignore
 


// 	const { Map, InfoWindow } = await loader.importLibrary("maps");
// 	const { AdvancedMarkerElement, PinElement } = await loader.importLibrary("marker");

// 	// The map, centered at Uluru
// 	map = new Map(document.getElementById("map"), {
// 		zoom: 8,
// 		center: Macon,
//     mapId: "DEMO_MAP_ID",
//     mapTypeId: "roadmap",
// 	});

// 	let geocoder = new loader.Geocoder();

// 	const inputText = document.createElement("input");

//   inputText.type = "text";
//   inputText.placeholder = "Enter a location";

//   const submitButton = document.createElement("input");

//   submitButton.type = "button";
//   submitButton.value = "Geocode";
//   submitButton.classList.add("button", "button-primary");

//   const clearButton = document.createElement("input");

//   clearButton.type = "button";
//   clearButton.value = "Clear";
//   clearButton.classList.add("button", "button-secondary");
//   response = document.createElement("pre");
//   response.id = "response";
//   response.innerText = "";
//   responseDiv = document.createElement("div");
//   responseDiv.id = "response-container";
//   responseDiv.appendChild(response);

//   const instructionsElement = document.createElement("p");

//   instructionsElement.id = "instructions";
//   instructionsElement.innerHTML =
//     "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
//   map.controls[loader.ControlPosition.TOP_LEFT].push(inputText);
//   map.controls[loader.ControlPosition.TOP_LEFT].push(submitButton);
//   map.controls[loader.ControlPosition.TOP_LEFT].push(clearButton);
//   map.controls[loader.ControlPosition.LEFT_TOP].push(instructionsElement);
//   map.controls[loader.ControlPosition.LEFT_TOP].push(responseDiv);

//   marker1 = new AdvancedMarkerElement({
// 	map,
//  });

//  map.addListener("click", (e) => {
//     geocode({ location: e.latLng });
//   });
//   submitButton.addEventListener("click", () =>
//     geocode({ address: inputText.value }),
//   );
//   clearButton.addEventListener("click", () => {
//     clear();
//   });
//   clear();

//   // const priceDiv = document.createElement("div");

//   	const priceTag = document.createElement("img");
//   	priceTag.className = "price-tag";
//   	priceTag.src =
// 		"./african_orphan_child_400x400.jpg";
//   // priceTag.textContent = "$2.5M";
//   // priceTag.appendChild(elem);

//   // const marker = new AdvancedMarkerElement({
//   //   map,
// 		// position: { lat: 37.42, lng: -122.1 },
//   //   content: priceTag,
//   // });

//   const cityCircle = new loader.Circle({
// 		strokeColor: "#000",
// 		strokeOpacity: 0.8,
// 		strokeWeight: 2,
// 		fillColor: "#FF0000",
// 		fillOpacity: 0.35,
// 		map,
// 		center: priceTag,
// 		radius: 100
// 	});

// 	// The marker, positioned at Uluru

//   const citymap = {
// 		chicago: {
// 			center: { lat: 41.878, lng: -87.629 },
// 			population: 2714856
// 		},
// 		newyork: {
// 			center: { lat: 40.714, lng: -74.005 },
// 			population: 8405837
// 		},
// 		losangeles: {
// 			center: { lat: 34.052, lng: -118.243 },
// 			population: 3857799
// 		},
// 		vancouver: {
// 			center: { lat: 49.25, lng: -123.1 },
// 			population: 603502
// 		}
// 	};

//   for (const city in citymap) {
// 		// Add the circle for this city to the map.
// 		const cityCircle = new loader.Circle({
// 			strokeColor: "#000",
// 			strokeOpacity: 0.8,
// 			strokeWeight: 2,
// 			fillColor: "#FF0000",
// 			fillOpacity: 0.35,
// 			map,
// 			center: citymap[city].center,
//       radius: Math.sqrt(citymap[city].population) * 100,
// 		});
//   }

// }

// initMap();

// function clear() {
// 	marker1.setMap(null);
// 	responseDiv.style.display = "none";
//   }

// function geocode(request) {
// 	clear();
// 	geocoder
// 	  .geocode(request)
// 	  .then((result) => {
// 		const { results } = result;

// 		map.setCenter(results[0].geometry.location);
// 		marker1.setPosition(results[0].geometry.location);
// 		marker1.setMap(map);
// 		responseDiv.style.display = "block";
// 		response.innerText = JSON.stringify(result, null, 2);
// 		return results;
// 	  })
// 	  .catch((e) => {
// 		alert("Geocode was not successful for the following reason: " + e);
// 	  });
//   }