import React from "react";
import { useNavigate } from "react-router";

export default function Login() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col flex-grow justify-center p-6">
            <h1 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
                Purdue Fitness
            </h1>
            <input 
                id="purdue-email"
                type="text"
                placeholder="Purdue Email" 
                className="w-full bg-white p-3 rounded-lg mb-4 text-black"
            />
            <input 
                id="password"
                type="password"
                placeholder="Password" 
                className="w-full bg-white p-3 rounded-lg mb-4 text-black"
            />
            <button 
                className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                onClick={ () => {navigate('/interests') } } 
                
            >
                Login
            </button>
        </div>
    );
}