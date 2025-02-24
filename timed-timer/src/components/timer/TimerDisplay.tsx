import React, { useState, useEffect, useRef } from "react";
import Card from "../common/Card";

interface TimerDisplayProps {
  isRunning: boolean;
  reset: boolean;
  customTime: number;
  setCustomTime: (time: number) => void;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  isRunning,
  reset,
  customTime,
  setCustomTime,
}) => {
  const [time, setTime] = useState(customTime * 60); // Custom time in seconds
  const alarmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  useEffect(() => {
    if (reset) {
      setTime(customTime * 60);
    }
  }, [reset, customTime]);

  useEffect(() => {
    if (time === 0 && alarmRef.current) {
      alarmRef.current.play();
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCustomTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTime(Number(e.target.value));
  };

  return (
    <Card>
      <div className="text-center text-4xl font-bold">{formatTime(time)}</div>
      <div className="mt-4">
        <label className="block text-center">
          Set Timer (minutes):
          <input
            type="number"
            value={customTime}
            onChange={handleCustomTimeChange}
            className="ml-2 p-1 border rounded"
          />
        </label>
      </div>
      <audio ref={alarmRef} src="/alarm-sound.mp3" preload="auto" />
    </Card>
  );
};

export default TimerDisplay;
