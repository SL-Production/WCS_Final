import React from "react";
import styles from "./index.module.scss";
import playlistImg from "../../../assets/playlist.png";
import likes from "../../../assets/likes.png";

const playlists = [
  {
    id: 1,
    name: "NEW YORK",
    subtitle: "Anglade",
    image: likes,
    album: "NEW YORK",
    addedDate: "2021-05-01",
  },
  {
    id: 2,
    name: "Playlist 2",
    subtitle: "Subtitle 2",
    image: playlistImg,
  },
  {
    id: 3,
    name: "Playlist 3",
    subtitle: "Subtitle 3",
    image: playlistImg,
  },
  {
    id: 4,
    name: "Playlist 4",
    subtitle: "Subtitle 4",
    image: playlistImg,
  },
  {
    id: 5,
    name: "Playlist 5",
    subtitle: "Subtitle 5",
    image: playlistImg,
  },
  {
    id: 6,
    name: "Playlist 6",
    subtitle: "Subtitle 6",
    image: playlistImg,
  },
  {
    id: 7,
    name: "Playlist 7",
    subtitle: "Subtitle 7",
    image: playlistImg,
  },
  {
    id: 8,
    name: "Playlist 8",
    subtitle: "Subtitle 8",
    image: playlistImg,
  },
  {
    id: 9,
    name: "Playlist 9",
    subtitle: "Subtitle 9",
    image: playlistImg,
  },
  {
    id: 10,
    name: "Playlist 8",
    subtitle: "Subtitle 8",
    image: playlistImg,
  },
  {
    id: 11,
    name: "Playlist 9",
    subtitle: "Subtitle 9",
    image: playlistImg,
  },
  // Ajoutez plus de playlists avec leurs titres, sous-titres et URLs d'image ici
];

function SongsList() {
  return (
    <div>
      <div className={styles.playlistContainer}>
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            className={styles.playlistButton}
            type="button"
          >
            <img
              src={playlist.image}
              alt={playlist.name}
              className={styles.playlistImage}
            />
            <div className={styles.playlistText}>
              <span className={styles.playlistTitle}>{playlist.name}</span>
              <span className={styles.playlistSubtitle}>
                {playlist.subtitle}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SongsList;
