import React, { useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import TimerControl from "./components/TimerControl";

interface TimerControlProps {
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

const LocalTimerControl: React.FC<TimerControlProps> = ({
  isRunning,
  startTimer,
  stopTimer,
  resetTimer,
}) => {
  return (
    <div>
      <button onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

const App: React.FC = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(1500); // Reset to 25 minutes
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <TimerDisplay time={time} />
      <LocalTimerControl
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;
