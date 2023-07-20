import React from "react";
import styles from "./index.module.scss";
import Slider from "./Slider"; // Import the Slider component
import LoginForm from "./LoginForm";
import logo from "../../assets/favicon.png";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.sliderContainer}>
        <Slider />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.loginLogo}>
          <img src={logo} alt="LogoListenMe" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
