import React from 'react';
import styles from './error.module.scss';

function Error() {
  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorText}>Ошибка соединения с сервером</p>
    </div>
  );
}

export default Error;
