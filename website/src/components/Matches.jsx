import React from "react";
import { useState } from "react";

export default function Matches() {

    const [matches, setMatches] = React.useState([]);

    const findMatches = () => {
        const foundMatches = EXAMPLE_USERS.filter(user => 
            user.interests.some(interest => selectedInterests.includes(interest))
        );
        setMatches(foundMatches);
        setScreen('Matches');
    };

    return (
        <div className="flex flex-col flex-grow p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
                Your Matches
            </h2>
            {matches.map(match => (
                <div 
                    key={match.id} 
                    className="bg-yellow-500 p-4 rounded-lg mb-4"
                >
                    <h3 className="text-lg font-bold text-black mb-2">
                        {match.name}
                    </h3>
                    <p className="text-black mb-2">
                        Interests: {match.interests.join(', ')}
                    </p>
                    <p className="text-black mb-4">
                        Available: {match.available}
                    </p>
                    <button 
                        className="w-full bg-black text-yellow-500 p-2 rounded-lg"
                        onClick={() => setScreen('Chat')}
                    >
                        Start Chat
                    </button>
                </div>

                
            ))}
        </div>

    )
}