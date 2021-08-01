import Flatpickr from 'react-flatpickr';
import styles from '../calendar/calendar.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const WEEK = 7;

function Calendar({date, handleChangeDate}) {
  const onChange = (calendarDate) => {
    const selectedDate = calendarDate[0];
    handleChangeDate(selectedDate);
  };

  const maxDate = new Date();

  const minDate = new Date();
  minDate.setDate((minDate).getDate() - WEEK);

  return (
    <Flatpickr
      className={styles.input}
      data-disable-time
      value={date}
      options={{
        dateFormat: 'j.n.Y',
        onChange: onChange,
        maxDate: maxDate,
        minDate: minDate,
      }}
    />
  );
}

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  handleChangeDate: PropTypes.func.isRequired,
};

export default Calendar;
