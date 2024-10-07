import { useState } from 'react'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import RequestListPage from './pages/RequestLists'
import WaylistsPage from './pages/Waylists';
import EmployeeInformationsPage from './pages/EmployeeInformations';
import RequestFormPage from './pages/RequestForm';
import QRUserPage from './pages/QRUser';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  return (
      <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Navbar />
                <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-lg sm:max-w-xl lg:max-w-6xl ">
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/requestlist" element={<RequestListPage />} />
                            <Route path="/waylists" element={<WaylistsPage />} />
                            <Route path="/employeeinformations" element={<EmployeeInformationsPage />} />
                            <Route path="/requestform" element={<RequestFormPage />} />
                            <Route path="/qruser" element={<QRUserPage />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
      </div>
  );

}

// function App() {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <BrowserRouter>
//                 {/* Navbar */}
//                 {/* <header className=""> */}
//                     <Navbar />
//                 {/* </header> */}
                
//                 {/* Main content area */}
//                 <main className="flex-grow px-4 py-6 sm:px-6 lg:px-8">
//                     <Routes>
//                         <Route path="/" element={<LoginPage />} />
//                         <Route path="/signup" element={<SignupPage />} />
//                         <Route path="/requestlist" element={<RequestListPage />} />
//                         <Route path="/waylists" element={<WaylistsPage />} />
//                         <Route path="/employeeinformations" element={<EmployeeInformationsPage />} />
//                         <Route path="/requestform" element={<RequestFormPage />} />
//                         <Route path="/qruser" element={<QRUserPage />} />
//                     </Routes>
//                 </main>
                
//                 {/* Footer */}
//                 {/* <footer className=""> */}
//                     <Footer />
//                 {/* </footer> */}
//             </BrowserRouter>
//         </div>
//     );
// }



export default App
