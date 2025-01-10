// Main React app component

import { useEffect, useState } from 'react';
import './styles/global.css';
import background from '/assets/background.png'; // background image
import gameName from '/assets/nanoLife_title.png'; // The game's name image
import playButton from '/assets/button_play.png'; // The "PLAY" button image

export default function App() {
  const [showGameName, setShowGameName] = useState(false); // Controls when the game name appears

  // Show the game name and button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGameName(true);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <div className="app">
      {/* Background Section */}
      <div className="splash-screen">
        <img 
          src={background} 
          alt="Background" 
          className={`background fade-in`} 
        />
        {showGameName && (
          <div className="game-content fade-in-button">
            <img src={gameName} alt="Game Name" className="game-name" />
            <img 
              src={playButton} 
              alt="Play Button" 
              className="play-button"
              onClick={() => console.log('Start Game!')} // Replace with navigation logic
            />
          </div>
        )}
      </div>
    </div>
  );
}

