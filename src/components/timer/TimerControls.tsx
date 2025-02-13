import React from "react";

/**
 * TimerControls component to show the timer controls
 * @returns {JSX.Element} The TimerControls component
 */
const TimerControls: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Focus Session
      </button>
      <p className="mt-2">Current Session: 25 minutes</p>
    </div>
  );
};

export default TimerControls;
