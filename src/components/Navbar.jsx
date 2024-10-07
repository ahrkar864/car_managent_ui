import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CompanyLogo from '../assets/images/company_logo.png';
import { IoListSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <nav className="bg-white bg-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={CompanyLogo} alt="Company Logo" className="h-10 mr-4" />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    onClick={toggleMenu} // Call toggleMenu on click
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block ${isOpen ? 'block' : 'hidden'} md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link
                                to="/"
                                className={`block rounded-md px-3 py-2 font-bold ${
                                    isActive('/') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                LOGIN
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/signup"
                                className={`block rounded-md px-3 py-2 font-bold ${
                                    isActive('/signup') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                SIGN UP
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                to="/waylists"
                                className={`block rounded-md px-3 py-2 font-bold ${
                                    isActive('/waylists') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                WAYLISTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/requestlist"
                                className={`flex items-center rounded-md px-3 py-2 font-bold ${
                                    isActive('/requestlist') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                <IoListSharp className="inline-block mr-2" />
                                REQUEST LISTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/employeeinformations"
                                className={`block rounded-md px-3 py-2 font-bold ${
                                    isActive('/employeeinformations') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                <MdFormatListBulleted className="inline-block mr-2" />EMPLOYEE INFO
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/requestform"
                                className={`block rounded-md px-3 py-2 font-bold ${
                                    isActive('/requestform') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                <FaWpforms className="inline-block mr-2" />REQUEST FORM
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/qruser"
                                className={`block rounded-md px-3 py-2 font-bold ${
                                    isActive('/qruser') ? 'bg-blue-400 text-white underline' : 'hover:bg-blue-400 hover:text-white hover:underline'
                                }`}
                            >
                                <BsQrCode className="inline-block mr-2" />QR USER
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
