// VolumeControl.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";

function VolumeControl({ volume, onVolumeChange }) {
  const handleVolumeChange = (event) => {
    const { value } = event.target;
    onVolumeChange(parseFloat(value));
  };

  return (
    <div className={styles.volumeControl}>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        className={styles.volumeSlider}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
};

export default VolumeControl;
