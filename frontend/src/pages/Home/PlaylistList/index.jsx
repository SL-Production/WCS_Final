import React from 'react';
import styles from './index.module.scss';

const playlists = [
  { id: 1, name: 'Playlist 1' },
  { id: 2, name: 'Playlist 2' },
  { id: 3, name: 'Playlist 3' },
  { id: 4, name: 'Playlist 4' },
  { id: 5, name: 'Playlist 5' },
  { id: 6, name: 'Playlist 6' },
  { id: 7, name: 'Playlist 7' },
  { id: 8, name: 'Playlist 8' },
  { id: 9, name: 'Playlist 9' },
  { id: 10, name: 'Playlist 10' },
];

const PlaylistList = () => {
  return (
    <div className={styles.playlistContainer}>
      {playlists.map((playlist) => (
        <button key={playlist.id} className={styles.playlistButton}>
          {playlist.name}
        </button>
      ))}
    </div>
  );
};

export default PlaylistList;
