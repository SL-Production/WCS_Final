import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";

function Timeline({ audio }) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);

  return (
    <div className={styles.timeline}>
      <div className={styles.progressBar}>
        <div ref={progressBarRef} className={styles.progressFilled} />
      </div>
    </div>
  );
}

Timeline.propTypes = {
  audio: PropTypes.instanceOf(Audio).isRequired,
};

export default Timeline;
