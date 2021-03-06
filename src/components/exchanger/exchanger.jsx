import React, {useEffect, useState} from 'react';
import styles from './exchanger.module.scss';
import 'flatpickr/dist/themes/material_green.css';
import {selectRates, selectUpdateRatesStatus} from '../../store/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {addHistoryData} from '../../store/slice';
import Calendar from '../calendar/calendar';
import Input from '../input/input';
import cn from 'classnames';
import {changeRatesDate} from '../../store/slice';
import Loading from '../loading/loading';
import dayjs from 'dayjs';
import Error from '../error/error';

const TIMEOUT = 3000;
const MIN_VALUE = '0';
const DEFAULT_CURRENCY_FROM = 'RUB';
const DEFAULT_CURRENCY_TO = 'USD';
const ID_SIZE = 5;
const InputLabels = {
  FROM: 'У меня есть',
  TO: 'Хочу приобрести',
};

const calcValue = (value, from, to) => +(value / from * to).toFixed(4);

const adaptValue = (value) => {
  if (value.length > 1 && value.charAt(0) === '0' && value.charAt(1) !== '.') {
    return value.trim().replace('0', '');
  }

  return value.trim();
};

const adaptDate = (date) => dayjs(date).format('YYYY-MM-DD');

const isEmpty = (value) => value !== '0' && value !== 0 && value !== '';

function Exchanger() {
  const [date, setDate] = useState(new Date());
  const [amountFrom, setAmountFrom] = useState(MIN_VALUE);
  const [currencyFrom, setCurrencyFrom] = useState(DEFAULT_CURRENCY_FROM);
  const [amountTo, setAmountTo] = useState(MIN_VALUE);
  const [currencyTo, setCurrencyTo] = useState(DEFAULT_CURRENCY_TO);
  const [errorState, setErrorState] = useState(false);
  const rates = useSelector(selectRates);
  const ratesUpdateStatus = useSelector(selectUpdateRatesStatus);
  const dispatch = useDispatch();
  const isValid = !(Boolean(amountFrom) && Boolean(amountTo) && isEmpty(amountFrom) && isEmpty(amountTo));
  const buttonClass = cn(isValid && styles.disabled, !isValid && styles.active, styles.button);

  useEffect(() => {
    setAmountTo(calcValue(amountFrom, rates[currencyFrom], rates[currencyTo]));
    //eslint-disable-next-line
  }, [rates]);

  useEffect(() => {
    if (ratesUpdateStatus.isError) {
      setErrorState(true);

      const timer = setTimeout(() => {
        setErrorState(false);
      }, TIMEOUT);

      return () => clearTimeout(timer);
    }
  }, [ratesUpdateStatus]);

  const onDateChange = (calendarDate) => {
    setDate(calendarDate);
    const adaptedDate = adaptDate(calendarDate);
    dispatch(changeRatesDate(adaptedDate));
  };

  const onAmountChange = (evt, type) => {
    const {value} = evt.target;
    const adaptedValue = adaptValue(value);
    if (isNaN(adaptedValue)) {
      return;
    }

    switch (type) {
      case InputLabels.FROM:
        setAmountFrom(adaptedValue);
        setAmountTo(calcValue(adaptedValue, rates[currencyFrom], rates[currencyTo]));
        break;
      case InputLabels.TO:
        setAmountTo(adaptedValue);
        setAmountFrom(calcValue(adaptedValue, rates[currencyTo], rates[currencyFrom]));
        break;
      default:
        break;
    }
  };

  const onCurrencyChange = (evt, type) => {
    const {value} = evt.target;

    switch (type) {
      case InputLabels.FROM:
        setCurrencyFrom(value);
        setAmountTo(calcValue(amountFrom, rates[value], rates[currencyTo]));
        break;
      case InputLabels.TO:
        setCurrencyTo(value);
        setAmountTo(calcValue(amountFrom, rates[currencyFrom], rates[value]));
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const data = {
      id: Math.random().toFixed(ID_SIZE),
      date: date,
      amountFrom: amountFrom,
      currencyFrom: currencyFrom,
      amountTo: amountTo,
      currencyTo: currencyTo,
    };
    dispatch(addHistoryData(data));
  };

  return (
    <section className={`${styles.wrapper} container`}>
      {ratesUpdateStatus.isLoading && <Loading/>}
      {errorState && <Error/>}
      <h2 className={styles.title}>Конвертер валют</h2>
      <form
        className={styles.container}
        onSubmit={formSubmitHandler}
      >
        <Input
          label={InputLabels.FROM}
          amountValue={amountFrom}
          onAmountChange={onAmountChange}
          currencyValue={currencyFrom}
          onCurrencyChange={onCurrencyChange}
        />
        <Input
          isImage
          label={InputLabels.TO}
          amountValue={amountTo}
          onAmountChange={onAmountChange}
          currencyValue={currencyTo}
          onCurrencyChange={onCurrencyChange}
        />
        <Calendar
          date={date}
          onDateChange={onDateChange}
        />
        <button
          className={buttonClass}
          disabled={isValid}
          type="submit"
        >
          Сохранить результат
        </button>
      </form>
    </section>
  );
}

export default Exchanger;
