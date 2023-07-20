import React from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";
import playIcon from "../../../../assets/play.svg";
import pauseIcon from "../../../../assets/pause.svg";
import back from "../../../../assets/prev.svg";
import next from "../../../../assets/next.svg";

function PlayerControls({ isPlaying, onPlayPause, onPrev, onNext }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onPlayPause();
    }
  };

  return (
    <div
      className={styles.playerControls}
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyPress}
    >
      <button className={styles.controlButton} type="button" onClick={onPrev}>
        <img src={back} alt="back" />
      </button>

      <button
        className={styles.controlButton}
        type="button"
        onClick={onPlayPause}
      >
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </button>

      <button className={styles.controlButton} type="button" onClick={onNext}>
        <img src={next} alt="next" />
      </button>
    </div>
  );
}

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default PlayerControls;
