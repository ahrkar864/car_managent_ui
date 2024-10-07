import WayListItem from "./WayListItem";
import CompanyLogo from '../assets/images/waylist.jpeg';
import FormAction from "./FormAction";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WayLists() {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleCheckboxChange = (id) => {
        // Allow only one selection by setting selectedOption to the id of the clicked checkbox
        setSelectedOption(id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption) {
            // If an option is selected, navigate to the next page
            navigate('/requestlist', { state: { selectedOption } });
        } else {
            // If no option is selected, alert the user
            alert('Please select at least one option.');
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg h-200">
            <img src={CompanyLogo} alt="Company Logo" className="w-full h-auto" />
            <form className="space-y-6" onSubmit={handleSubmit}>
                <WayListItem
                    id="1"
                    label="Deliver Way"
                    isDisabled={false} 
                    onChange={handleCheckboxChange}
                    isChecked={selectedOption === "1"}
                />
                <WayListItem
                    id="2"
                    label="Ferry Way"
                    isDisabled={false}
                    onChange={handleCheckboxChange}
                    isChecked={selectedOption === "2"}
                />
                <WayListItem
                    id="3"
                    label="Product Transfer"
                    isDisabled={false}
                    onChange={handleCheckboxChange}
                    isChecked={selectedOption === "3"}
                />
                <WayListItem
                    id="4"
                    label="Office Use"
                    isDisabled={false}
                    onChange={handleCheckboxChange}
                    isChecked={selectedOption === "4"}
                />
                <FormAction handleSubmit={handleSubmit} text="Submit" />
            </form>
        </div>
    );
}
