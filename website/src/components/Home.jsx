import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();
   return (
    <div className="flex flex-col flex-grow justify-center p-6">
                  <h1 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
                      Purdue Fitness
                  </h1>
                  <button 
                      className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                      onClick={() => { navigate('/register') }}
                      
                  >
                      Register
                  </button>
                  <button 
                      className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                      onClick={() => { navigate('/login') }}
                      
                  >
                      Login
                  </button>
              </div>
   );
}
