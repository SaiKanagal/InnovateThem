import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Interests() {

    const navigate = useNavigate();

    const INTERESTS = [
        'Volleyball', 'Soccer', 'Tennis', 
        'Swimming', 'Dance Fitness', 'Pilates', 
        'Running', 'Yoga', 'Rock Climbing'
        ];

    const [selectedInterests, setSelectedInterests] = React.useState([]);

    const toggleInterest = (interest) => {
        setSelectedInterests(prev => 
            prev.includes(interest) 
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };


    return (
        <div className="flex flex-col flex-grow p-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
                Select Interests
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {INTERESTS.map(interest => (
                    <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`
                            px-4 py-2 rounded-full 
                            ${selectedInterests.includes(interest) 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-white text-black'}
                        `}
                    >
                        {interest}
                    </button>
                ))}
            </div>
                  <button 
                      className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                      onClick={ () => {navigate('/matches')} }
                  >
                      Find Matches
                  </button>
              </div>
    );
}