import React, { useEffect } from "react";
import Card from "../common/Card";

interface TimerDisplayProps {
  time: number;
  isRunning: boolean;
  onTimeChange: (time: number) => void;
  sessionDuration: number; // New prop for session duration
}

/**
 * TimerDisplay component to show the timer
 * @returns {JSX.Element} The TimerDisplay component
 */
const TimerDisplay: React.FC<TimerDisplayProps> = ({
  time,
  isRunning,
  onTimeChange,
  sessionDuration, // Destructure new prop
}) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        onTimeChange((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, onTimeChange]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <Card>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{formatTime(time)}</h1>
        <p className="mt-2">Current Session: {sessionDuration} minutes</p>{" "}
        {/* Display session duration */}
      </div>
    </Card>
  );
};

export default TimerDisplay;
