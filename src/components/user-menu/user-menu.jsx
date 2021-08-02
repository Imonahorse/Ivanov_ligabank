import React from 'react';
import styles from './user-menu.module.scss';

function UserMenu() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="/" className={styles.link}>
          Войти в Интернет-банк
        </a>
      </li>
    </ul>
  );
}

export default UserMenu;
