import React from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";
import playIcon from "../../../../assets/play.svg";
import pauseIcon from "../../../../assets/pause.svg";
import back from "../../../../assets/prev.svg";
import next from "../../../../assets/next.svg";

function PlayerControls({ isPlaying, onPlayPause }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onPlayPause();
    }
  };

  return (
    <div
      className={styles.playerControls}
      onClick={onPlayPause}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
    >
      <button className={styles.controlButton} type="button">
        <img src={back} alt="back" />
      </button>

      <button className={styles.controlButton} type="button">
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </button>

      <button className={styles.controlButton} type="button">
        <img src={next} alt="next" />
      </button>
    </div>
  );
}

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
};

export default PlayerControls;
