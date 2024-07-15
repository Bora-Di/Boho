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
          <a href="mailto:Bouchrahoumaidi99@gmail.com" className="fa fa-envelope fa-lg"></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/bouchra-houmaidi/" className="fa fa-linkedin"></a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Bora-Di" className="fa fa-github fa-lg"></a>
        </li>
        <li className={styles.link}>
          <a href="https://x.com/BouchraHoumaidi" className="fa fa-twitter fa-lg"></a>
        </li>
        <li className={styles.link}>
          <a href="tel:+212682700186" className="fa fa-phone fa-lg"></a>
        </li>
      </ul>
    </footer>
  );
};
