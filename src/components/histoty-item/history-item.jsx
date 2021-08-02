import React from 'react';
import styles from './history-item.module.scss';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const adaptDate = (date) => dayjs(date).format('DD.MM.YYYY');

function HistoryItem({item}) {
  const {date, amountTo, amountFrom, currencyTo, currencyFrom} = item;
  const humanizedDate = adaptDate(date);

  return (
    <li className={styles.item}>
      <span className={styles.date}>{humanizedDate}</span>
      <span className={styles.amountFrom}>{amountFrom} {currencyFrom}</span>
      <span className={styles.amountTo}>{amountTo} {currencyTo}</span>
    </li>
  );
}

HistoryItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.object.isRequired,
    amountTo: PropTypes.node.isRequired,
    amountFrom: PropTypes.node.isRequired,
    currencyTo: PropTypes.string.isRequired,
    currencyFrom: PropTypes.string.isRequired,
  }).isRequired,
};

export default HistoryItem;
