import React, { useState, useEffect, useRef } from "react";
import "../styles/Gameplay.css";

// Utility function for random number generation
const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Gameplay = ({ gold, setGold, temperature, setTemperature, isThermostatExpanded, setIsThermostatExpanded }) => {
    const [currentDate, setCurrentDate] = useState(new Date().toDateString());
    const [salinity, setSalinity] = useState(generateRandom(10, 20));
    const [algae, setAlgae] = useState([]);
    const [nutrientsThrown, setNutrientsThrown] = useState([]);
    const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback
    const aquariumRef = useRef(null); // Ref for the aquarium container
    const [aquariumTop, setAquariumTop] = useState(0);
    const [aquariumDimensions, setAquariumDimensions] = useState({ width: 0, height: 0 });

    // Function to reset tasks
    const resetDailyTasks = () => {
        setSalinity(generateRandom(10, 20));
        setTemperature(generateRandom(15, 25));
        setNutrientsThrown([]); // Clear nutrients
        setFeedbackMessage(""); // Clear feedback message at the start of the day
    };

    useEffect(() => {
        if (aquariumRef.current) {
            const { width, height } = aquariumRef.current.getBoundingClientRect();
            setAquariumDimensions({ width, height });
        }
    }, []);

    useEffect(() => {
        if (aquariumDimensions.width > 0 && aquariumDimensions.height > 0) {
            // Generate random algae positions
            const newAlgae = Array.from({ length: 5 }).map(() => {
                const position = generateRandomPosition(aquariumDimensions.width, aquariumDimensions.height, 30);
                return position; // Return the position object
            });
            setAlgae(newAlgae); // Update state with valid algae data
        }
    }, [aquariumDimensions]);
    

    // Check if a new day has started
    useEffect(() => {
        const today = new Date().toDateString();
        if (today !== currentDate) {
            setCurrentDate(today);
            resetDailyTasks();
        }
    }, [currentDate]);

    // Initialize tasks on component mount
    useEffect(() => {
        resetDailyTasks();
    }, []);

    useEffect(() => {
        if (aquariumRef.current) {
            // Get the top coordinate of the aquarium container
            const aquariumBounds = aquariumRef.current.getBoundingClientRect();
            setAquariumTop(aquariumBounds.top);
        }
    }, []);

    // Handle removing algae
    const handleRemoveAlgae = (id) => {
        setAlgae((prevAlgae) => prevAlgae.filter((a) => a.id !== id));
    
        // Provide feedback to the user
        setFeedbackMessage("Felicitari! Ai curatat niste alge nedorite! 🌱 \n +10🪙" );
    
        // Update gold
        setGold((gold) => gold + 10);

        // Automatically clear feedback after the animation duration (3 seconds)
        setTimeout(() => setFeedbackMessage(""), 3000);
    };

    // Throw nutrients
    const handleThrowNutrient = () => {
        setNutrientsThrown((prev) => [
            ...prev,
            { id: Math.random(), x: Math.random() * 80 + 10, y: -10 }, // Start above the aquarium
        ]);

        // Provide feedback to the user
        setFeedbackMessage("Felicitari! Ai aruncat niste nutrienti! \n +1🪙");

        // Update gold
        setGold((gold) => gold + 1);
    };

    // Handle thermostat toggle
    const handleThermostatClick = () => {
        setIsThermostatExpanded((prev) => !prev);
        console.log("Thermostat: ", isThermostatExpanded);
    };

    // Increment and decrement temperature
    const incrementTemperature = () => {
        setTemperature((prevTemp) => prevTemp + 1);
    };

    const decrementTemperature = () => {
        setTemperature((prevTemp) => prevTemp - 1);
    };

    return (
        <div className="aquarium" ref={aquariumRef}>

        {/* Aquarium Image */}
        <div className="aquarium-image">
            {/* Render Algae */}
            {algae.map((a) => (
                <div
                    key={a.id} // Use the unique id
                    className="algae"
                    style={{ top: `${a.y}px`, left: `${a.x}px` }}
                    onClick={() => handleRemoveAlgae(a.id)}
                />
            ))}

            <div className="Nanoz"></div>

            {/* Render Nutrients */}
            {nutrientsThrown.map((nutrient) => (
            <div
                key={nutrient.id}
                className="nutrient"
                style={{
                top: `${nutrient.y}%`,
                left: `${nutrient.x}%`,
                }}
            />
            ))}
        </div>
        
        <div className="meters">
            {/* Salinity meter */}
            <div
                className="salinity-meter"
                style={{ top: `${aquariumTop - 10}px` }} // Adjusting 20px from the top of the aquarium
            >
            </div>

            {/* Thermometer */}
            <div
                className="thermometer"
                onClick={handleThermostatClick}
                style={{ top: `${aquariumTop - 10}px` }} // Adjusting 80px from the top of the aquarium
            >
                {temperature}
            </div>
        </div>

        {/* Feed Nutrients */}
        <div className="nutrients">
            <button onClick={handleThrowNutrient}></button>
        </div>

        {/* Feedback Message */}
        {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}

            {/* Expanded Thermostat Controls */}
            {isThermostatExpanded && (
            <>
                <div className="overlay-thermometer" onClick={() => setIsThermostatExpanded(false)}></div>
                    <div className="overlay-content-thermometer">
                        <button className="close-btn-thermometer" onClick={() => setIsThermostatExpanded(false)}> X </button>
                        <div className="thermometer" onClick={handleThermostatClick}> {temperature} </div>
                        <button className="decrement-btn" onClick={decrementTemperature}></button>
                        <button className="increment-btn" onClick={incrementTemperature}></button>
                    </div>
            </>
            )};
        </div>
        
    );
};

export default Gameplay;

const generateRandomPosition = (containerWidth, containerHeight, margin = 20) => {
    const x = Math.floor(Math.random() * (containerWidth - 2 * 120) + margin);
    const y = Math.floor(Math.random() * (containerHeight - 2 * 120) + margin);
    return { x, y, id: Math.random().toString(36).slice(2, 9) }; // Unique ID
};
