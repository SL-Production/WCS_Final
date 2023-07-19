import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import LeftPanel from "./LeftPanel";
import PlayerControls from "./PlayerControls";
import Timeline from "./Timeline";
import VolumeControl from "./VolumeControl";

function MusicPlayer({ isPlaying, onPlayPause, audio, music }) {
  useEffect(() => {
    if (audio.src !== music) {
      // eslint-disable-next-line no-param-reassign
      audio.src = music;
    }

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio, music]);

  return (
    <div className={styles.musicPlayer}>
      <LeftPanel music={music} />
      <PlayerControls isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <Timeline audio={audio} />
      <VolumeControl audio={audio} />
    </div>
  );
}

MusicPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  audio: PropTypes.instanceOf(Audio).isRequired,
  music: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicPlayer;
