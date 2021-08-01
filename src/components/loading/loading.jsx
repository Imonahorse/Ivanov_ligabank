import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import styles from './loading.module.scss';

const LOADING_SIZE = '20px';
const LOADING_COLOR = '#4481c3';

function Loading() {
  return(
    <div className={styles.loading}>
      <PulseLoader color={LOADING_COLOR} size={LOADING_SIZE}/>
    </div>
  );
}

export default Loading;
