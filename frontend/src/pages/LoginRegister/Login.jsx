import React from "react";
import styles from "./index.module.scss";
import Slider from "./Slider"; // Import the Slider component
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.sliderContainer}>
        <Slider />
      </div>
      <div className={styles.loginForm}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
