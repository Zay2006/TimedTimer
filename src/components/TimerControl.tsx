import React, { useState } from 'react';

const TimerControl: React.FC = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    // Implement timer logic here
  };

  const stopTimer = () => {
    setIsRunning(false);
    // Implement stop logic here
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(1500); // Reset to 25 minutes
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2"
        onClick={startTimer}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg m-2"
        onClick={stopTimer}
        disabled={!isRunning}
      >
        Stop
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-lg m-2"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControl;