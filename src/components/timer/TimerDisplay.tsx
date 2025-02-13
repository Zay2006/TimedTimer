import React from "react";

interface TimerDisplayProps {
  time: number; // Time in seconds
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <div className="text-4xl font-bold text-center bg-white p-6 rounded-2xl shadow-md">
      {formattedTime}
    </div>
  );
};

export default TimerDisplay;
