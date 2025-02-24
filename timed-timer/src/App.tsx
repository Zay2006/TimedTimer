import React, { useState } from "react";
import TimerDisplay from "./components/timer/TimerDisplay";
import TimerControls from "./components/timer/TimerControls";

interface TimerDisplayProps {
  isRunning: boolean;
  reset: boolean;
  customTime: number;
  setCustomTime: React.Dispatch<React.SetStateAction<number>>;
}

interface TimerControlsProps {
  onStart: () => void;
  onReset: () => void;
  customTime: number;
}

const App: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [reset, setReset] = useState(false);
  const [customTime, setCustomTime] = useState(25); // Custom time in minutes

  const handleStart = () => {
    setIsRunning(true);
    setReset(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setReset(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TimerDisplay
        isRunning={isRunning}
        reset={reset}
        customTime={customTime}
        setCustomTime={setCustomTime}
      />
      <TimerControls
        onStart={handleStart}
        onReset={handleReset}
        customTime={customTime}
      />
    </div>
  );
};

export default App;
