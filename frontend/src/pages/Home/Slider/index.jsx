import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";

const images = [one, two, three];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changement d'image toutes les 3 secondes

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={
            index === currentImageIndex
              ? styles.slideVisible
              : styles.slideHidden
          }
        />
      ))}
    </div>
  );
};

export default Slider;
