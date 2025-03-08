import React, { useState, useEffect, useRef } from "react";
import Card from "../common/Card";

interface TimerDisplayProps {
  isRunning: boolean;
  reset: boolean;
  customTime: number;
  setCustomTime: (time: number) => void;
  onResetAudio: () => void;
  textColor: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  isRunning,
  reset,
  customTime,
  setCustomTime,
  onResetAudio,
  textColor,
}) => {
  const [time, setTime] = useState(customTime); // Custom time in seconds
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
      setTime(customTime);
      if (alarmRef.current) {
        alarmRef.current.pause();
        alarmRef.current.currentTime = 0;
      }
    }
  }, [reset, customTime]);

  useEffect(() => {
    if (time === 0 && alarmRef.current) {
      alarmRef.current.play();
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleCustomTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const timeInSeconds = {
      hours: Number(value) * 3600,
      minutes: Number(value) * 60,
      seconds: Number(value),
    };
    setCustomTime(timeInSeconds[name as keyof typeof timeInSeconds]);
  };

  return (
    <Card>
      <div
        className="text-center text-4xl font-bold"
        style={{ color: textColor }}
      >
        {formatTime(time)}
      </div>
      <div className="mt-4">
        <label className="block text-center">
          Set Timer:
          <input
            type="number"
            name="hours"
            placeholder="Hours"
            onChange={handleCustomTimeChange}
            className="ml-2 p-1 border rounded"
          />
          <input
            type="number"
            name="minutes"
            placeholder="Minutes"
            onChange={handleCustomTimeChange}
            className="ml-2 p-1 border rounded"
          />
          <input
            type="number"
            name="seconds"
            placeholder="Seconds"
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
