import QRCode from "react-qr-code";
import CompanyLogo from '../assets/images/waylist.jpeg';

export default function QRUser() {
    const mapContainerStyle = {
        height: "400px",
        width: "800px"
    };

    const center = {
        lat: 16.8409,
        lng: 96.1735
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg h-200">
            <img src={CompanyLogo} alt="Company Logo" className="w-full h-auto" /> 
            <div >
                <QRCode
                    p-6="true"
                    className="w-full"
                    value="https://example.com" 
                    size={250}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="Q"
                />
            </div>
        </div>
    );
}
