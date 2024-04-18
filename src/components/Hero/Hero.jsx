import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, </h1>
        <p className={styles.description}>
          Bienvenue sur mon portfolio ! Je suis une développeuse front-end
          récemment formée, passionnée par la création d'expériences web
          innovantes. Découvrez mes projets et contactez-moi pour discuter de
          collaborations excitantes!
        </p>
        <a href="mailto:e.plumey@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
