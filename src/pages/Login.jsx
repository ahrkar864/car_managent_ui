import React from 'react'
import Header from "../components/Header";
import Login from '../components/Login';

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 p-4 rounded-lg h-200">
        <Header
                heading="Car Management System"
                // paragraph="Don't have an account yet? "
                // linkName="Signup"
                linkUrl="/signup"
                />
        <Login/>
    </div>
  )
}
