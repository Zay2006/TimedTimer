import React, { useState } from "react";
import TimerDisplay from "./components/timer/TimerDisplay";
import TimerControls from "./components/timer/TimerControls";

/**
 * App component to render the main application
 * @returns {JSX.Element} The App component
 */
const App: React.FC = () => {
  const [time, setTime] = useState<number>(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleRestart = () => {
    setIsRunning(false);
    setTime(1500); // Reset to 25 minutes
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <button
        className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <TimerDisplay time={time} isRunning={isRunning} onTimeChange={setTime} />
      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onRestart={handleRestart}
        onTimeChange={setTime}
      />
    </div>
  );
};

export default App;
