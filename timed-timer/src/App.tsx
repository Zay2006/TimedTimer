import React, { useState } from "react";
import TimerDisplay from "./components/timer/TimerDisplay";
import TimerControls from "./components/timer/TimerControls";
import ImageSlideshow from "./components/ImageSlideshow";

const App: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [reset, setReset] = useState(false);
  const [customTime, setCustomTime] = useState(0); // Custom time in seconds
  const [cycleDuration, setCycleDuration] = useState(3600); // Default cycle duration in seconds (1 hour)
  const [singleImage, setSingleImage] = useState(true); // Default to single image
  const [textColor, setTextColor] = useState("#000000"); // Default text color

  const handleStart = () => {
    setIsRunning(true);
    setReset(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setReset(true);
  };

  const handleCycleDurationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCycleDuration(Number(e.target.value) * 60); // Convert minutes to seconds
  };

  const handleImageModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingleImage(e.target.value === "single");
  };

  const handleImageChange = (index: number) => {
    // Change the text color based on the image index
    const colors = ["#FFFFFF", "#000000", "#FF0000"]; // Example colors for each image
    setTextColor(colors[index % colors.length]);
  };

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    // Add more images as needed
  ];

  return (
    <div className="content">
      <ImageSlideshow
        images={images}
        cycleDuration={cycleDuration}
        singleImage={singleImage}
        onImageChange={handleImageChange}
      />
      <div className="mt-4">
        <label className="block text-center">
          <input
            type="radio"
            name="imageMode"
            value="single"
            checked={singleImage}
            onChange={handleImageModeChange}
            className="mr-2"
          />
          Single Image
          <input
            type="radio"
            name="imageMode"
            value="slideshow"
            checked={!singleImage}
            onChange={handleImageModeChange}
            className="ml-4 mr-2"
          />
          Slideshow
        </label>
        {!singleImage && (
          <label className="block text-center mt-2">
            Set Image Cycle Duration (minutes):
            <input
              type="number"
              value={cycleDuration / 60} // Convert seconds to minutes
              onChange={handleCycleDurationChange}
              className="ml-2 p-1 border rounded"
            />
          </label>
        )}
      </div>
      <TimerDisplay
        isRunning={isRunning}
        reset={reset}
        customTime={customTime}
        setCustomTime={setCustomTime}
        onResetAudio={() => {}} // Add a proper function here
        textColor={textColor}
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
