/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Connexion ✨</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Identifiant</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
            <div className={styles.forgot}>
              <a rel="noopener noreferrer" href="#">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
          <button className={styles.sign} type="button">
            Connexion
          </button>
        </form>
        <div className={styles.socialMessage}>
          <div className={styles.line} />
          <p className={styles.message}>Pas encore de compte ?</p>
          <div className={styles.line} />
        </div>
        <div className={styles.socialIcons}>
          <button
            className={styles.signAsInvite}
            type="button"
            onClick={handleLogin}
          >
            Connexion en tant qu'invité
          </button>
        </div>
        <p className={styles.signup}>
          Ou alors inscrivez-vous juste ici
          <br />
          <a rel="noopener noreferrer" href="#" className={styles.signup}>
            Inscription
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
