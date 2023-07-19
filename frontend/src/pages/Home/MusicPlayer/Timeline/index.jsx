import React from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";

function Timeline({ currentTime, duration, onTimeUpdate }) {
  const handleTimeUpdate = (event) => {
    const { newCurrentTime } = event.target;
    onTimeUpdate(newCurrentTime);
  };

  return (
    <div className={styles.timeline}>
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={1}
        className={styles.progressSlider}
        onChange={handleTimeUpdate}
      />
    </div>
  );
}

Timeline.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
};

export default Timeline;
