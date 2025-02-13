import React from "react";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onRestart: () => void;
  onTimeChange: (time: number) => void;
}

/**
 * TimerControls component to show the timer controls
 * @returns {JSX.Element} The TimerControls component
 */
const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onStop,
  onRestart,
  onTimeChange,
}) => {
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(event.target.value, 10) * 60;
    onTimeChange(newTime);
  };

  return (
    <div className="text-center mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={isRunning ? onStop : onStart}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={onRestart}
      >
        Restart
      </button>
      <div className="mt-2">
        <label htmlFor="timeInput" className="mr-2">
          Set Timer (minutes):
        </label>
        <input
          id="timeInput"
          type="number"
          min="1"
          className="border rounded px-2 py-1"
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default TimerControls;
