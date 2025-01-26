import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {

    const navigate = useNavigate();
    const [purdueEmail, setPurdueEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(true);

    const handleLogin = async () => {
        const url = "http://localhost:3000/api/login";

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({purdueEmail: purdueEmail, password: password}),
            });

            console.log(response);
            if (response.status === 200) {
                console.log('Login successful');
                navigate('/interests');
            } else if (response.status === 401) {
                console.log('Invalid credentials');
                setLoginSuccess(false);
            } else {
                console.log('An error occurred:', response.status);
                setLoginSuccess(false);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

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
                id="password"
                type="password"
                placeholder="Password" 
                className="w-full bg-white p-3 rounded-lg mb-4 text-black"
                value={password} // Bind input value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
            <button 
                className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                onClick={handleLogin} 
            >
                Login
            </button>
            {!loginSuccess && <p className="text-red-500 text-center">Login failed, please try again!</p>}
        </div>
    );
}