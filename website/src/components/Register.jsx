import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate();

    const [purdueEmail, setPurdueEmail] = useState("");
    const [purdueId, setPurdueId] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        console.log("Purdue Email:", purdueEmail);
        console.log("Purdue ID:", purdueId);
        console.log("Password:", password);
        // Add your registration logic here
    };

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
                value={purdueEmail} // Bind input value to state
                onChange={(e) => setPurdueEmail(e.target.value)} // Update state on change
            />
            <input 
                id="purdue-id"
                type="text"
                placeholder="Purdue ID" 
                className="w-full bg-white p-3 rounded-lg mb-4 text-black"
                value={purdueId} // Bind input value to state
                onChange={(e) => setPurdueId(e.target.value)} // Update state on change
            />
            <input 
                id="password"
                type="password"
                placeholder="Password" 
                className="w-full bg-white p-3 rounded-lg mb-4 text-black"
                value={password} // Bind input value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
            <button 
                className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                onClick={() => { handleRegister(); navigate('/interests'); }} // Handle button click
            >
                Register
            </button>
        </div>
    );
}