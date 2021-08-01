import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/logo';
import MainMenu from '../main-menu/main-menu';
import UserMenu from '../user-menu/user-menu';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <nav className={styles.nav}>
          <Logo/>
          <MainMenu/>
          <UserMenu/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
