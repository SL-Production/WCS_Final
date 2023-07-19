import React from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";
import heartIcon from "../../../../assets/heart.svg";

function LeftPanel({ music }) {
  return (
    <div className={styles.leftPanel}>
      <img src={music.image} alt="Music Album" className={styles.musicImage} />
      <div className={styles.musicDetails}>
        <h2 className={styles.musicTitle}>{music.name}</h2>
        <p className={styles.musicSubtitle}>{music.subtitle}</p>
      </div>
      <img src={heartIcon} alt="Favorite" className={styles.heartIcon} />
    </div>
  );
}

LeftPanel.propTypes = {
  music: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default LeftPanel;
