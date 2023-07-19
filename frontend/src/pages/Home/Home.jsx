import React from "react";
import Counter from "../../components/Counter";
import logo from "../../assets/logo.svg";
import styles from "./index.module.scss"; // You can use your own CSS module for styling
import Menu from "./Menu";
import PlaylistList from "./PlaylistList";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        {/* Left section */}
        <div className={styles.leftSection}>
          <Menu />
          <PlaylistList />

          <img src={logo} className={styles.logo} alt="logo" />
          <p>Hello Vite + React !</p>
          <Counter />
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={styles.link}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>{" "}
            |{" "}
            <a
              className={styles.link}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>

        {/* Center section */}
        <div className={styles.centerSection}>
          {/* Your content for the center section goes here */}
          {/* For example, you can add a playlist or a player */}
          <Counter />
        </div>

        {/* Right section */}
        <div className={styles.rightSection}>
          {/* Your content for the right section goes here */}
          {/* For example, you can add trending songs or recommended playlists */}
          <Counter />
        </div>
      </div>
      <div className={styles.bottomSection}>
        {/* Your content for the bottom section goes here */}
        {/* For example, you can add trending songs or recommended playlists */}
        <Counter />
      </div>
    </div>
  );
}

export default Home;
