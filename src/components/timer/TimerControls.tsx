import React from "react";

interface TimerControlsProps {
  onStart: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ onStart }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Start Focus Session
      </button>
    </div>
  );
};

export default TimerControls;
