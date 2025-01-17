// Main React app component

import { useEffect, useState } from 'react';
import './styles/global.css';
import Gameplay from './components/Gameplay';
import background from '/assets/background.png'; // background image
import gameName from '/assets/nanoLife_title.png'; // The game's name image
import playButton from '/assets/button_play.png'; // The "PLAY" button image
import plantImage from '/assets/Nanoz sad 2.png'; // Image of the plant
import triangle from '/assets/triangle.svg';

import SettingsPage from './pages/SettingPage';
import EducationPage from './pages/EducationPage';
import ShopPage from './pages/ShopPage';
import AutoplayAudio from './components/AutoplayAudio';

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function App() {

  const initialState = {
    date: new Date().toDateString(),
    gold: 0,
    temperature: false,
    salinity: false,
    inventory: [],
    equipedItem: null,
  };

  const [storage, setStorage] = useState(() => {
    const savedStorage = localStorage.getItem('storage');
    if (savedStorage) {
      const parsedStorage = JSON.parse(savedStorage);
      const currentDate = new Date().toDateString();

      if (parsedStorage.date !== currentDate) {
        // Preserve specific fields when resetting
        const { gold, inventory, equippedItem } = parsedStorage;
        const updatedStorage = {
          ...initialState,
          gold,
          inventory,
          equippedItem,
        };

        localStorage.setItem('storage', JSON.stringify(updatedStorage));
        return updatedStorage;
      }

      return parsedStorage;
    }

    // Initialize storage if none exists
    localStorage.setItem('storage', JSON.stringify(initialState));
    return initialState;
  });


  const [showGameName, setShowGameName] = useState(false); // Controls when the game name appears
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [gameState, setGameState] = useState("splash"); // Track the current game state
  const [currentDialogue, setCurrentDialogue] = useState(0); // Track current dialogue line
  const [showInstructions, setShowInstructions] = useState(true);
  const [audioPlay, setAudioPlay] = useState(false); //Track if audio should be playing
  const [gold, setGold] = useState(storage.gold);
  const [isThermostatExpanded, setIsThermostatExpanded] = useState(false); // Track expanded state
  const [temperature, setTemperature] = useState(storage.temperature == true ? 20 : generateRandom(15, 25));
  const [isSalinityExpanded, setIsSalinityExpanded] = useState(false); // Track expanded state
  const [salinity, setSalinity] = useState(storage.salinity == true ? 20 : generateRandom(15, 25));
  const [inventory, setInventory] = useState(storage.inventory);
  const [equippedItem, setEquippedItem] = useState(storage.equippedItem);


  const dialogueLines = [
    "Buna! Sunt Nanozostera și am nevoie de ajutor!",
    "Din păcate, oamenii mi-au disturs familia poluând, dar și atunci când au început sa construiască diguri peste casa noastra.",
    "Am rămas singur și sunt foarte bolnav. Am nevoie de ajutorul tău!"
  ];

  // Show the game name and button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGameName(true);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);
  
  useEffect(() => {
    setStorage((prevStorage) => {
      const updatedStorage = {
        ...prevStorage,
        gold,
        equippedItem,
        inventory,
        temperature: temperature === 20 ? true : false,
        salinity: salinity === 20 ? true : false,
      };
  
      // Save the updated storage to localStorage
      localStorage.setItem('storage', JSON.stringify(updatedStorage));
  
      return updatedStorage;
    });
  }, [gold, salinity, temperature, equippedItem, inventory]);
  

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Play button click
  const handlePlayClick = () => {
    setGameState("intro"); // Switch to the intro sequence
  };

  // Handle Next button click in the intro sequence
  const handleNextDialogue = () => {
    if (currentDialogue < dialogueLines.length - 1) {
      setCurrentDialogue(currentDialogue + 1); // Advance to the next dialogue line
    } else {
      setGameState("game"); // Switch to the main game state
    }
  };

  if (!isLandscape) {
    return <div className="rotate-message">Please rotate your device to landscape mode!</div>;
  }

  const handleCheckboxChange = (newState) => {
    setAudioPlay(newState);
  }

  const resetGameMode = () => {
    setGameState('game');
  }

  return (
    <div className="app">
      {/* Message for portrait mode */}
      <div className="rotate-message">
        Please rotate your device to landscape mode to play the game!
      </div>

      {/* App content */}
      <div className="app-content">
          <img 
            src={background} 
            alt="Background" 
            className={`background fade-in`} 
          />

          <AutoplayAudio play={audioPlay} />

          {gameState === "splash" && (
            <div className="splash-screen">
              {showGameName && (
                <div className="game-content fade-in-button">
                <img src={gameName} alt="Game Name" className="game-name" />
                <img 
                  src={playButton} 
                  alt="Play Button" 
                  className="play-button"
                  onClick={handlePlayClick}
                />
              </div>
              )}
            </div>              
          )}

          {gameState === "intro" && (
            <div className="game-content-intro">
              <img src={plantImage} alt="Plant" className="plant-image" />              
              <p className="dialogue-text">{dialogueLines[currentDialogue]}</p>              
              <button className="next-button" onClick={handleNextDialogue}>
                <img 
                src={triangle} 
                alt="Next" 
                className="next-arrow" 
                />
              </button>
            </div>
          )}

          {
            gameState === "settings" && (
              <SettingsPage
                isChecked = {audioPlay}
                onCheckboxChange = {handleCheckboxChange}
                resetGameMode = {resetGameMode}
              />
            )
          }

          {
            gameState === "education" && (
              <EducationPage
                resetGameMode = {resetGameMode}
              />
            )
          }

          {gameState === "shop" && (
              <ShopPage
                gold = {gold}
                setGold = {setGold}
                resetGameMode = {resetGameMode}
                inventory = {inventory}
                setInventory = {setInventory}
                equippedItem = {equippedItem}
                setEquippedItem = {setEquippedItem}
                storage = {storage}
                setStorage = {setStorage}
              />
            )
          }

          {gameState === "game" && (
            <div className="game-wrapper">
              <div className="game-content-game">
                {/* aquarium-related UI here */}
                {gameState === "game" && 
                  <Gameplay 
                    gold={gold} 
                    setGold={setGold} 
                    temperature={temperature} 
                    setTemperature={setTemperature} 
                    isThermostatExpanded={isThermostatExpanded} 
                    setIsThermostatExpanded={setIsThermostatExpanded} 
                    salinity={salinity}
                    setSalinity={setSalinity}
                    isSalinityExpanded={isSalinityExpanded}
                    setIsSalinityExpanded={setIsSalinityExpanded}
                    equippedItem={equippedItem}
                    storage={storage}
                    setStorage={setStorage}
                  />
                }
              </div>
              <div className="sidebar">
                <button className="sidebar-button currency-button" onClick={() => setGameState('shop')}>
                  {gold}💰
                </button>
                <button className="sidebar-button settings-button" onClick={() => setGameState('settings')}>
                  ⚙
                </button>
                <button className="sidebar-button education-button" onClick={() => setGameState('education')}>
                  📘
                </button>
              </div>

              {showInstructions && (
                <div className="overlay">
                  <div className="overlay-content">
                    <p className="gameplay-instructions">Bine ai venit! Scurt ghid pentru jocul NanoLife. Trebuie sa ai grija de planta nanozostera zilnic prin mentinerea temperaturii la 20° Celsius, salinitatii la 20 g/l si prin a te asigura ca o hranesti cu nutrienti.</p>
                    <button className="overlay-button" onClick={() => setShowInstructions(false)}>Am inteles!</button>
                  </div>
                </div>
              )}
            </div>
          )}
      </div>        
    </div>
  );
}

