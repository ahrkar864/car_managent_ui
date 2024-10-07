import { useState } from 'react';
import axios from 'axios';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: loginState.email,
                password: loginState.password,
            });
    
            setSuccessMessage(response.data.message);
            setErrorMessage('');
    
            navigate('/waylists'); 
        } catch (error) {
            if (error.response) {
                const errorResponse = error.response.data;
                if (errorResponse.message === "Invalid credentials.") {
                    setErrorMessage('Email or password is incorrect.');
                } else {
                    setErrorMessage(errorResponse.message);
                }
                setSuccessMessage('');
            } else {
                setErrorMessage('An error occurred while logging in.');
                setSuccessMessage('');
            }
        }
    };
    

    return (
        <div className="flex items-center justify-center w-full">
            <div className="max-w-lg w-full sm:max-w-xl lg:max-w-xl ">
                <form onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    ))}

                    {errorMessage && (
                        <div className="text-red-500 mt-4">
                            {errorMessage}
                        </div>
                    )}
                    <FormExtra />
                    <FormAction handleSubmit={handleSubmit} text="Login" />


                </form>
            </div>
        </div>
    );
}
