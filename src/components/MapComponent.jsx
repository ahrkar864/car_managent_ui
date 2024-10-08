import React, { useEffect, useRef, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    DirectionsRenderer,
    Autocomplete,

} from "@react-google-maps/api";

const MapComponent = ({
    handleMapClick,
    departureMarker,
    directionsResponse,
    arrivalMarker
    // apiKey 
  }) => {
    const mapRef = useRef(null); 

    // const [arrivalMarker, setArrivalMarker] = useState(null);
    const onLoadSearchBox = (autocomplete) => {
     
        // console.log("Autocomplete loaded:", autocomplete);
    };
  
    const onPlacesChanged = (autocomplete) => {
        // console.log('hello');
        // const place = autocomplete.getPlace();

        // if (place && place.geometry) {
        // const location = {
        //     lat: place.geometry.location.lat(),
        //     lng: place.geometry.location.lng()
        // };
        // setArrivalMarker(location);
        // }
    };

    return (
        <LoadScript
        googleMapsApiKey="AIzaSyAW4lCx_c5IFO_zmRuFWYJ5n2tCBcduNdQ" 
        libraries={['places']} 
        >
        <GoogleMap
            mapContainerStyle={{ height: "400px", width: "100%" }}
            center={departureMarker || { lat: 16.8409, lng: 96.1735 }} 
            zoom={12}
            onClick={handleMapClick}
            ref={mapRef} 
        >
            
            <Autocomplete
            onLoad={onLoadSearchBox}
            onPlacesChanged={onPlacesChanged}
            >
            <input
                type="text"
                placeholder="Search for a location"
                className="form-control"
                style={{
                boxSizing: "border-box",
                border: "1px solid transparent",
                width: "240px",
                height: "32px",
                marginTop: "13px",
                marginLeft: "40px",
                padding: "0 12px",
                borderRadius: "3px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                fontSize: "14px",
                outline: "none",
                textOverflow: "ellipses",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "3"
                }}
            />
            </Autocomplete>

            
            {departureMarker && (
            <Marker position={departureMarker} label="Departure" />
            )}

        
            {arrivalMarker && (
            <Marker position={arrivalMarker} label="Arrival" />
            )}

            
            {directionsResponse && (
            <DirectionsRenderer
                directions={directionsResponse}
            />
            )}
        </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
