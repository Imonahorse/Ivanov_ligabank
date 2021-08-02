import styles from './input.module.scss';
import {Currency} from '../../const';
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Input(
  {
    label,
    isImage = false,
    amountValue,
    handleChangeAmount,
    currencyValue,
    handleChangeCurrency,
  },
) {
  const imageClass = cn(isImage && styles.image, styles.label);
  return (
    <fieldset className={styles.fieldset}>
        <label className={imageClass}>
          {label}
          <input
            className={styles.input}
            type="text"
            maxLength="10"
            value={amountValue}
            onChange={(evt) => handleChangeAmount(evt, label)}
          />
        </label>
        <label>
          <span className='visually-hidden'>Валюта</span>
          <select
            className={styles.select}
            value={currencyValue}
            onChange={(evt) => handleChangeCurrency(evt, label)}
          >
            {Object.keys(Currency).map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </label>
    </fieldset>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  isImage: PropTypes.bool,
  amountValue: PropTypes.node.isRequired,
  handleChangeAmount: PropTypes.func.isRequired,
  currencyValue: PropTypes.string.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired,
};

export default Input;
