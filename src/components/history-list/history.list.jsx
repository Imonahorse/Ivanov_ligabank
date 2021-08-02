import React from 'react';
import {useSelector} from 'react-redux';
import {selectModifiedHistory} from '../../store/selectors';
import HistoryItem from '../histoty-item/history-item';
import styles from './history-list.module.scss';

function HistoryList() {
  const history = useSelector(selectModifiedHistory);

  return (
    <ul className={styles.list}>
      {history.map((item) => <HistoryItem item={item} key={item.id}/>)}
    </ul>
  );
}

export default HistoryList;
