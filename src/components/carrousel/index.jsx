import React, { useState, useEffect } from "react";
import { CarrouselCont, Slide } from "./style.js";

function Carrousel({ arrayOfImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayOfImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [arrayOfImages.length]);

  return (
    <CarrouselCont>
      {arrayOfImages.map((item, i) => (
        <Slide
          imgurl={item}
          key={i}
          active={currentIndex === i ? true : false}
        />
      ))}
    </CarrouselCont>
  );
}

export default Carrousel;
