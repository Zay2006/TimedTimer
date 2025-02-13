import React, { useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import TimerControl from "./components/TimerControl";

const App: React.FC = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
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
      <TimerControl
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;

