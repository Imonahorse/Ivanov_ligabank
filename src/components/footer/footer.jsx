import React from 'react';
import Logo from '../logo/logo';
import styles from './footer.module.scss';
import MainMenu from '../main-menu/main-menu';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';
import youtube from '../../img/youtube.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.company}>
          <Logo className={styles.logoFooter}/>
          <address className={styles.address}>
            150015, г. Москва, ул. Московская, д. 32
            Генеральная лицензия Банка России №1050
            Ⓒ Лига Банк, 2019
          </address>
        </div>
        <MainMenu isFooter/>
        <div className={styles.telMobile}>
          <a className={styles.phone} href="tel: 0904">*0904</a>
          <span className={styles.description}>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</span>
        </div>
        <div className={styles.telHome}>
          <a className={styles.phone} href="tel: 8 800 111 22 33">8 800 111 22 33</a>
          <span className={styles.description}>Бесплатный для всех городов России</span>
        </div>
        <ul className={styles.socials}>
          <li className={styles.icon}>
            <a href="/#">
              <img src={facebook} alt="facebook"/>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="/#">
              <img src={instagram} alt="instagram"/>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="/#">
              <img src={twitter} alt="twitter"/>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="/#">
              <img src={youtube} alt="youtube"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
