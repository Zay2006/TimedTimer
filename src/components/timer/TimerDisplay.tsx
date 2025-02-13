import React, { useState, useEffect } from "react";
import Card from "../common/Card";

/**
 * TimerDisplay component to show the timer
 * @returns {JSX.Element} The TimerDisplay component
 */
const TimerDisplay: React.FC = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
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
      </div>
    </Card>
  );
};

export default TimerDisplay;
