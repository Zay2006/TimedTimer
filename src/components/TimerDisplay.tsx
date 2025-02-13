import React from 'react';

interface TimerDisplayProps {
  time: number; // time in seconds
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex justify-center items-center h-20 w-40 bg-gray-200 rounded-lg">
      <span className="text-2xl font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default TimerDisplay;