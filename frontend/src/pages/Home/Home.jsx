import React, { useState, useEffect } from "react";
import Counter from "../../components/Counter";
import styles from "./index.module.scss";
import Menu from "./Menu";
import PlaylistList from "./PlaylistList";
import Slider from "./Slider";
import SongsList from "./SongsList";
import MusicPlayer from "./MusicPlayer";

import vingt from "../../assets/songs/25G.mp3";
import bad from "../../assets/songs/BAD_(feat.Omah_Lay).mp3";
import bonquaca from "../../assets/songs/BON_QUÀ_ÇA.mp3";
import branche from "../../assets/songs/BRANCHÉ_SUR_SNAP.mp3";
import CHIRAQ from "../../assets/songs/CHIRAQ.mp3";
import peau from "../../assets/songs/DANS LA PEAU.mp3";
import edouard from "../../assets/songs/EDOUARD NAHUM.mp3";
import eurostar from "../../assets/songs/EUROSTAR (feat. Central Cee).mp3";
import grandensemble from "../../assets/songs/GRANDS ENSEMBLES.mp3";
import respect from "../../assets/songs/RESPECT.mp3";
import johny from "../../assets/songs/LA VIE DE JOHNNY.mp3";
import rich from "../../assets/songs/RICH PORTER.mp3";
import yomoko from "../../assets/songs/YO MOKO OYEBI.mp3";

import likes from "../../assets/likes.png";

const playlists = [
  {
    id: 1,
    name: "25 G",
    subtitle: "Ninho",
    image: likes,
    music: vingt,
  },
  {
    id: 2,
    name: "CHIRAQ",
    subtitle: "Ninho",
    image: likes,
    music: CHIRAQ,
  },
  {
    id: 3,
    name: "BRANCHÉ SUR SNAP",
    subtitle: "Ninho",
    image: likes,
    music: branche,
  },
  {
    id: 4,
    name: "BAD",
    subtitle: "Ninho",
    image: likes,
    music: bad,
  },
  {
    id: 5,
    name: "BLUE STORY",
    subtitle: "Ninho (Feat. lil Baby)",
    image: likes,
    music: bad,
  },
  {
    id: 6,
    name: "BAD",
    subtitle: "Ninho",
    image: likes,
    music: bad,
  },
  {
    id: 7,
    name: "BON QUÀ ÇA",
    subtitle: "Ninho",
    image: likes,
    music: bonquaca,
  },
  {
    id: 8,
    name: "DANS LA PEAU",
    subtitle: "Ninho",
    image: likes,
    music: peau,
  },
  {
    id: 9,
    name: "EDOUARD NAHUM",
    subtitle: "Ninho",
    image: likes,
    music: edouard,
  },
  {
    id: 10,
    name: "EUROSTAR",
    subtitle: "Ninho (Feat. Central Cee)",
    image: likes,
    music: eurostar,
  },
  {
    id: 11,
    name: "GRANDS ENSEMBLES",
    subtitle: "Ninho",
    image: likes,
    music: grandensemble,
  },
  {
    id: 12,
    name: "RESPECT",
    subtitle: "Ninho",
    image: likes,
    music: respect,
  },
  {
    id: 13,
    name: "LA VIE DE JOHNNY",
    subtitle: "Ninho",
    image: likes,
    music: johny,
  },
  {
    id: 14,
    name: "RICH PORTER",
    subtitle: "Ninho",
    image: likes,
    music: rich,
  },
  {
    id: 15,
    name: "YO MOKO OYEBI",
    subtitle: "Ninho",
    image: likes,
    music: yomoko,
  },
];

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [selectedMusicObj, setSelectedMusicObj] = useState(null);

  useEffect(() => {
    const handleAudioError = (error) => {
      console.error("Error loading audio:", error);
      // TODO : Faire quelque chose en cas d'erreur de chargement de l'audio
    };

    audio.addEventListener("error", handleAudioError);

    return () => {
      audio.removeEventListener("error", handleAudioError);
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audio.paused || audio.src !== selectedMusic) {
      audio.src = selectedMusic;
      audio.load();
    }

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, selectedMusic, audio]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Menu />
          <PlaylistList />
        </div>

        <div className={styles.centerSection}>
          <Slider />
          <SongsList
            playlists={playlists}
            onSongClick={(song) => {
              setSelectedMusic(song.music);
              setIsPlaying(true);
              setSelectedMusicObj(song);
            }}
          />
        </div>

        <div className={styles.rightSection}>
          <Counter />
        </div>
      </div>
      <div className={styles.bottomSection}>
        {selectedMusic && (
          <MusicPlayer
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            audio={audio}
            music={selectedMusicObj}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
