import React from "react";
import styles from "./index.module.scss";

import slider1 from "../../../assets/login/1.png";
import slider2 from "../../../assets/login/2.png";
import slider3 from "../../../assets/login/3.png";

const images = [slider1, slider2, slider3];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`${styles.slide} ${
            index === currentImageIndex ? styles.activeSlide : ""
          }`}
        />
      ))}
    </div>
  );
}

export default Slider;
