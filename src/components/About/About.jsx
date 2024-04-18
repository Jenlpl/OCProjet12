import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Passionnée d'apprentissage</h3>
              <p>
                Je suis dévouée à maîtriser l'art du développement web, en
                perfectionnant constamment mes compétences pour créer des
                expériences en ligne dynamiques et engageantes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Passionnée de technologie</h3>
              <p>
                Animée par une fascination pour la technologie, je suis capable
                d'explorer les systèmes backend et les APIs, veillant à ce
                qu'ils soient efficaces et performants.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Exploratrice créative</h3>
              <p>
                Dotée d'un sens de design, j'apprécie créer des interfaces
                visuellement attrayantes et explorer les subtilités de
                l'interaction utilisateur.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
