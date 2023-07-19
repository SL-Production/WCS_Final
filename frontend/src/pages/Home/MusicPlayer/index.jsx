/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import LeftPanel from "./LeftPanel";
import PlayerControls from "./PlayerControls";
import Timeline from "./Timeline";
import VolumeControl from "./VolumeControl";

function MusicPlayer({ isPlaying, onPlayPause, audio, music }) {
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audio.src !== music) {
      audio.src = music;
    }

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio, music]);

  const handleVolumeChange = (newVolume) => {
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className={styles.musicPlayer}>
      <LeftPanel music={music} />
      <PlayerControls isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <Timeline audio={audio} />
      <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
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
