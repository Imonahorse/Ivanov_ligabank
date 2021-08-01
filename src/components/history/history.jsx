import React from 'react';
import styles from './history.module.scss';
import HistoryList from '../history-list/history.list';
import {clearHistory} from '../../store/actions';
import {useDispatch} from 'react-redux';

function History() {
  const dispatch = useDispatch();
  const clearHistoryHandler = () => dispatch(clearHistory());

  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} container`}>
        <h2 className={styles.title}>История конвертация</h2>
        <HistoryList/>
        <button
          className={styles.button}
          type="button"
          onClick={clearHistoryHandler}
        >
          Очистить историю
        </button>
      </div>
    </section>
  );
}

export default History;
