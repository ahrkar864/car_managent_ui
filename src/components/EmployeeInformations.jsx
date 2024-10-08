import React, { useState, useCallback, useEffect, useRef } from "react";
import {DirectionsService } from "@react-google-maps/api";
import { EmployeeInformationFields } from "../constants/formFields";
import FormAction from "./FormAction";
import EnployeeInformationsInput from "./EmployeeInformatjonsInput";
import Title from "./Title";
import axios from "axios";
import BranchSelect from "./BranchSelect";
import MapComponent from "./MapComponent";


const fields = EmployeeInformationFields;

export default function EmployeeInformations() {
    const [formData, setFormData] = useState({
        location: ''
    });
    const [branches, setBranches] = useState([]);
    // const [markerPosition, setMarkerPosition] = useState(null);
    const [departureMarker, setDepartureMarker] = useState(null);
    const [arrivalMarker, setArrivalMarker] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [routeInfo, setRouteInfo] = useState(null); 

    const [searchBox, setSearchBox] = useState(null); // Search box reference

    const mapRef = useRef(null);
    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/branches'); 
                // if (response.status === 200) {
                //     console.log("Branches fetched successfully:", response.data);
                // } else {
                //     console.error("Failed to fetch branches:", response.status);
                // }
                setBranches(response.data);
            } catch (error) {
                console.error("Error fetching branches", error);
            }
        }
        fetchBranches();
    },[]);


    const handleMapClick = useCallback((event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setArrivalMarker({ lat, lng });
        setFormData(prev => ({
            ...prev,
            location: `Lat: ${lat}, Lng: ${lng}`
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = {
            ...formData, 
            location: { 
                lat: 16.887421753639224,
                lng: 96.13247320428803
            },
            departureBranch: departureMarker,
            arrivalLocation: arrivalMarker,
        };

        
    
        try {
            const response = await axios.post('http://localhost:8000/api/store-document', formPayload);
            if (response.status === 200) {
                console.log('Data submitted successfully:', response.data);
                // Handle success (e.g., show success message, clear form)
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }

       
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleBranchChange = (e) => {
        const selectedBranch = branches.find(branch => branch.branch_name === e.target.value);
        if (selectedBranch) {
            const lat = parseFloat(selectedBranch.latitude);
            const lng = parseFloat(selectedBranch.longitude);
            // console.log(lat,lng);
            setDepartureMarker({ lat, lng });
            // setFormData(prev => ({
            //     ...prev,
            //     departureBranch: selectedBranch.branch_name
            // }));
            // setFormData(prev => ({
            //     ...prev,
            //     branch: selectedBranch.branch_name
            // }));
            // setMapCenter({ lat: selectedBranch.lat, lng: selectedBranch.lng });
        }
    };

    useEffect(() => {
        if (departureMarker && arrivalMarker) {
            
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: departureMarker, 
                    destination: arrivalMarker, 
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirectionsResponse(result);
                        const route = result.routes[0].legs[0]; 
                        setRouteInfo({
                            distance: route.distance.text, 
                            duration: route.duration.text  
                        });
                    } else {
                        console.error(`Error fetching directions: ${status}`);
                    }
                }
            );
        }
    }, [departureMarker, arrivalMarker]);

    const onLoadSearchBox = (ref) => {
        setSearchBox(ref); 
    };

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
            return;
        }

        const place = places[0]; 
        const location = place.geometry.location;

       
        setArrivalMarker({ lat: location.lat(), lng: location.lng() });

        setFormData(prev => ({
            ...prev,
            location: `Lat: ${location.lat()}, Lng: ${location.lng()}`
        }));

        mapRef.current.panTo({ lat: location.lat(), lng: location.lng() });
    };
    

    return (
        <>
        <Title title="Employee Information Form" />
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg">
                {fields.map((field) => (
                    <EnployeeInformationsInput
                        key={field.id}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        handleChange={handleChange}
                        isReadOnly={field.isReadOnly}
                    />
                ))}

                <BranchSelect branches={branches} handleBranchChange={handleBranchChange} />

                <MapComponent  handleMapClick={handleMapClick} departureMarker={departureMarker}  arrivalMarker={arrivalMarker}  directionsResponse={directionsResponse} 
                   />
               
                {routeInfo && (
                <div className="route-info mt-4 p-4 border border-gray-300 rounded-lg">
                    <p><strong>Distance:</strong> {routeInfo.distance}</p>
                    <p><strong>Duration:</strong> {routeInfo.duration}</p>
                </div>
            )}

            </div>



            <FormAction handleSubmit={handleSubmit} text="OK" />
        </form>
        </>
    );
}




