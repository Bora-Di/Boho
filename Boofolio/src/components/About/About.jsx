import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <div className={styles.aboutText}>
          <p>
          Hello, I'm Bouchra, a junior software engineer graduated from ENSAH. Passionate about creating intuitive and visually appealing user experiences. Equipped with a foundation in programming languages and frameworks such as HTML, CSS, , PHP, Laravel, JAVA and JavaScript. Dedicated to continuous growth, actively seeking opportunities to expand both technical and design skills. Enthusiastic about leveraging the combination of software engineering and graphic design expertise to craft engaging and impactful digital experiences.
          </p>
        </div>

        <div className={styles.imageContainer}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="front end icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="back end icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/design.png")} alt="design icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
            </div>
          </li>
           
        </ul>

        </div>
       
      </div>
    </section>
  );
};
