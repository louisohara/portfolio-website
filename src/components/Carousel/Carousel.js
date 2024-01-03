import screenshot from "../../assets/images/laptop.svg";
import group2 from "../../assets/images/group2.svg";
import group from "../../assets/images/group.svg";
import React, { useState, useEffect } from "react";
import "../Work/Work.scss";

const ImageCarousel = () => {
  const images = [screenshot, group, group2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="work__carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="work__image"
      />
    </div>
  );
};

export default ImageCarousel;
