import React from 'react';
import styles from './intro.module.scss';

function Intro() {
  return (
    <section className={styles.block}>
      <div className={`${styles.wrapper} ${styles.picture} container`}>
        <h3 className={styles.title}>Лига Банк</h3>
        <p className={styles.text}>Кредиты на любой случай</p>
        <button className={styles.button}>Рассчитать кредит</button>
      </div>
    </section>
  );
}

export default Intro;
