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
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleToggleYouTube = () => {
    setShowYouTube(!showYouTube);
  };

  const handleYouTubeLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeLink(e.target.value);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    const videoId = urlParams.get("v");
    const playlistId = urlParams.get("list");
    if (playlistId) {
      return `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1`;
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
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
        <div className="mt-2">
          Current Session: {Math.floor(customTime / 3600)}:
          {Math.floor((customTime % 3600) / 60)}:{customTime % 60}
        </div>
        {showYouTube && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter YouTube link"
              value={youtubeLink}
              onChange={handleYouTubeLinkChange}
              className="p-2 border rounded w-full"
            />
            {youtubeLink && (
              <iframe
                width="560"
                height="315"
                src={getYouTubeEmbedUrl(youtubeLink)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default TimerControls;
