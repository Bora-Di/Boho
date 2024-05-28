import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:Bouchrahoumaidi99@email.com">Bouchrahoumaidi99@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bouchra-houmaidi/">in/bouchra-houmaidi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Bora-Di">Github.com/Bora-Di</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="phone icon" />
          <a href="+212682700186">+212 682700186</a>
        </li>
      </ul>
    </footer>
  );
};
