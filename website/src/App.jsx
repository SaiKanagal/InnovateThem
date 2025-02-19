import React, { useState } from "react";

const PURDUE_COLORS = {
  black: '#1A1A1A',
  gold: '#FFD1DC',  
  white: '#FFF5EE', 
  accent: '#FF69B4' 
};

const INTERESTS = [
  'Volleyball', 'Soccer', 'Tennis', 
  'Swimming', 'Dance Fitness', 'Pilates', 
  'Running', 'Yoga', 'Rock Climbing'
];

const EXAMPLE_USERS = [
  { 
      id: 1, 
      name: 'Emma Johnson', 
      interests: ['Volleyball', 'Yoga'],
      available: 'Mon 4-6 PM'
  },
  { 
      id: 2, 
      name: 'Sophia Martinez', 
      interests: ['Soccer', 'Running'],
      available: 'Tue 5-7 PM'
  }
];

function App() {
  const [screen, setScreen] = React.useState('Login');
  const [selectedInterests, setSelectedInterests] = React.useState([]);
  const [matches, setMatches] = React.useState([]);

  const toggleInterest = (interest) => {
      setSelectedInterests(prev => 
          prev.includes(interest) 
              ? prev.filter(i => i !== interest)
              : [...prev, interest]
      );
  };

  const findMatches = () => {
      const foundMatches = EXAMPLE_USERS.filter(user => 
          user.interests.some(interest => selectedInterests.includes(interest))
      );
      setMatches(foundMatches);
      setScreen('Matches');
  };

  return (
      <div 
          className="flex flex-col h-screen max-w-md mx-auto overflow-hidden"
          style={{backgroundColor: PURDUE_COLORS.black}}
      >
          {screen === 'Login' && (
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
                      id="purdue-id"
                      type="text"
                      placeholder="Purdue ID" 
                      className="w-full bg-white p-3 rounded-lg mb-4 text-black"
                  />
                  <button 
                      className="w-full bg-yellow-500 text-black p-3 rounded-lg"
                      onClick={() => {  }}
                      
                  >
                      Login
                  </button>
              </div>
          )}

          {screen === 'Interests' && (
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
                      onClick={findMatches}
                  >
                      Find Matches
                  </button>
              </div>
          )}

          {screen === 'Matches' && (
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
          )}

          {screen === 'Chat' && (
              <div className="flex flex-col flex-grow">
                  <div className="bg-yellow-500 p-4 flex justify-between items-center">
                      <button 
                          className="text-black"
                          onClick={() => setScreen('Matches')}
                      >
                          Back
                      </button>
                      <h2 className="text-lg font-bold text-black">
                          Emma Johnson
                      </h2>
                      <div></div>
                  </div>
                  
                  <div className="flex-grow p-4 overflow-y-auto">
                      <div className="bg-white p-3 rounded-lg mb-2">
                          <p>Hey, want to work out together?</p>
                      </div>
                  </div>
                  
                  <div className="flex p-4 border-t border-gray-700">
                      <input
                          type="text"
                          placeholder="Type a message"
                          className="flex-grow bg-white p-2 rounded-l-lg text-black"
                      />
                      <button 
                          className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg"
                      >
                          Send
                      </button>
                  </div>
              </div>
          )}
      </div>
  );
}

export default App;