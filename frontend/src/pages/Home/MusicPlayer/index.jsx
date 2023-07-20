/* eslint-disable no-param-reassign */
// MusicPlayer.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import LeftPanel from "./LeftPanel";
import Timeline from "./Timeline";
import VolumeControl from "./VolumeControl";
import PlayerControls from "./PlayerControls";

function MusicPlayer({ isPlaying, onPlayPause, audio, music, onPrev, onNext }) {
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

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

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    onPlayPause(!isPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  return (
    <div className={styles.musicPlayer}>
      <LeftPanel music={music} />
      <div className={styles.controlsAndTimeline}>
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Timeline audio={audio} currentTime={currentTime} />
      </div>
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
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default MusicPlayer;
