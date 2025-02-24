// filepath: /c:/Users/iwrig/Projects/TimedTimer-1/src/components/timer/TimerControls.tsx
import React, { useState } from "react";
import Card from "../common/Card";

interface TimerControlsProps {
  onStart: () => void;
  onReset: () => void;
  customTime: number;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  onStart,
  onReset,
  customTime,
}) => {
  const [showYouTube, setShowYouTube] = useState(false);

  const handleToggleYouTube = () => {
    setShowYouTube(!showYouTube);
  };

  return (
    <Card>
      <div className="text-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={onStart}
        >
          Start Focus Session
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded mr-2"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleToggleYouTube}
        >
          {showYouTube ? "Hide YouTube" : "Show YouTube"}
        </button>
        <div className="mt-2">Current Session: {customTime} minutes</div>
        {showYouTube && (
          <div className="mt-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TimerControls;
