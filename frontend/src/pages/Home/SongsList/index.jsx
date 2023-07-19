import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

function SongsList({ playlists, onSongClick }) {
  return (
    <div>
      <div className={styles.playlistContainer}>
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            className={styles.playlistButton}
            type="button"
            onClick={() => onSongClick(playlist)}
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

SongsList.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSongClick: PropTypes.func.isRequired,
};

export default SongsList;
