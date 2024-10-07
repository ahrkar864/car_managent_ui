import React from 'react';
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai'; // Importing eye and plus icons
import Title from './Title';
import { useNavigate } from 'react-router-dom';

export default function RequestLists() {
    const requests = [
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
        { id: "OFH0202024-001", date: "2024-10-02" },
    ];

    const navigate = useNavigate();

    const handleAddRequest = () => {
        navigate('/employeeinformations');
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <Title
                title="Lists Page(OFFICE USE)"
                />
                <button 
                    onClick={handleAddRequest}
                    className="flex items-center text-white bg-blue-400 hover:bg-blue-500 rounded-full p-2"
                >
                    <AiOutlinePlus className="h-5 w-5" />
                    <span className="ml-2">Add</span>
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg">
                {requests.map((request, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 p-3">
                        <div className="flex flex-col">
                            <span className="font-medium text-lg">{request.id}</span>
                            <span className="text-gray-500">{request.date}</span>
                        </div>
                        <button className="text-blue-500 hover:text-blue-700">
                            <AiOutlineEye className="h-6 w-6" />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
