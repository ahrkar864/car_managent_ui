import CompanyLogo from '../assets/images/waylist.jpeg';
export default function RequestForm () {
    return (  
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg h-200">
        <img src={CompanyLogo} alt="Company Logo" className="w-full h-auto" /> 
            <div className="bg-white p-6 rounded-lg shadow-md text-gray-500 dark:text-gray-400 ">
                {/* <h1 className="text-xl font-bold text-center text-blue-600">Request Form List</h1> */}

                <ul className="space-y-4">
                    <li className="flex justify-between">
                        <span className="text-gray-700">Name:</span> 
                        <span className="font-semibold text-gray-900">Ahrkarkyaw</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Phone No:</span> 
                        <span className="font-semibold text-gray-900">09250150528</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Time:</span> 
                        <span className="font-semibold text-gray-900">2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Place:</span> 
                        <span className="font-semibold text-gray-900">ShweDagon Pagoda</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Remark:</span> 
                        <span className="font-semibold text-gray-900">want to buy something</span>
                    </li>
                </ul>

                <div className="mt-6">
                    <div className="text-gray-500 text-sm">Requested by</div>
                    <div className="font-semibold text-gray-900">Ahrkarkyaw</div>
                    <div className="text-gray-500 text-sm">Head Office (System Development)</div>
                    <div className="text-gray-400 text-xs">2024-09-27 14:44:30</div>
                </div>

                <div className="mt-6 text-right">
                    <div className="text-gray-500 text-sm">Approved by</div>
                    {/* Add approved by information here if needed */}
                </div>

                <button 
                type="submit" 
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-10">
                    OK
                </button>
            </div>
        </div>
        </>
    );
}
