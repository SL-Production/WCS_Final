import React from "react";
import styles from "./index.module.scss";
import home from "../../../assets/home.png";
import search from "../../../assets/search.png";

function Menu() {
  return (
    <div className={styles.menu}>
      <button className={styles.button} type="button">
        <img src={home} alt="Accueil" className={styles.icon} />
        <span className={styles.text}>Accueil</span>
      </button>
      <button className={styles.button} type="button">
        <img src={search} alt="Recherche" className={styles.icon} />
        <span className={styles.text}>Recherche</span>
      </button>
    </div>
  );
}

export default Menu;
