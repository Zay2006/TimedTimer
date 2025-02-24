// filepath: /c:/Users/iwrig/Projects/TimedTimer-1/timed-timer/src/components/ImageSlideshow.tsx
import React, { useState, useEffect } from "react";

interface ImageSlideshowProps {
  images: string[];
  cycleDuration: number; // Duration in seconds
  singleImage: boolean;
  onImageChange: (index: number) => void;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  cycleDuration,
  singleImage,
  onImageChange,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (singleImage) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        onImageChange(newIndex);
        return newIndex;
      });
    }, cycleDuration * 1000);

    return () => clearInterval(interval);
  }, [images.length, cycleDuration, singleImage, onImageChange]);

  useEffect(() => {
    onImageChange(currentImageIndex);
  }, [currentImageIndex, onImageChange]);

  return (
    <div className="slideshow">
      <img
        src={singleImage ? images[0] : images[currentImageIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export default ImageSlideshow;
