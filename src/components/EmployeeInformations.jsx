import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { EmployeeInformationFields } from "../constants/formFields";
import FormAction from "./FormAction";
import EnployeeInformationsInput from "./EmployeeInformatjonsInput";
import Title from "./Title";
import axios from "axios";


const fields = EmployeeInformationFields;

export default function EmployeeInformations() {
    const [formData, setFormData] = useState({
        location: ''
    });
    const [branches, setBranches] = useState([]);
    const [markerPosition, setMarkerPosition] = useState(null);

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
        setMarkerPosition({ lat, lng });
        setFormData(prev => ({
            ...prev,
            location: `Lat: ${lat}, Lng: ${lng}`
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
            console.log(selectedBranch);
            // setFormData(prev => ({
            //     ...prev,
            //     branch: selectedBranch.branch_name
            // }));
            // setMapCenter({ lat: selectedBranch.lat, lng: selectedBranch.lng });
        }
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

                <div className="">
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">Departure Branch</label>
                    <select
                        name="branch"
                        id="branch"
                        className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        value={formData.branch}
                        onChange={handleBranchChange}
                    >
                        <option value="">Select a branch</option>
                        {branches.map((branch) => (
                            <option key={branch.id} value={branch.branch_name}>
                                {branch.branch_name} ({branch.branch_code})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="map-container">
                    <label htmlFor="" className="mt-2 block text-sm font-medium text-gray-700 mb-2">
                        LOCATION
                    </label>
                    <LoadScript googleMapsApiKey="AIzaSyAW4lCx_c5IFO_zmRuFWYJ5n2tCBcduNdQ">
                        <GoogleMap
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                            center={{ lat: 16.8409, lng: 96.1735 }}
                            zoom={12}
                            onClick={handleMapClick}
                        >
                            {markerPosition && (
                                <Marker position={markerPosition} /> 
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>



            </div>

            <FormAction handleSubmit={handleSubmit} text="OK" />
        </form>
        </>
    );
}


