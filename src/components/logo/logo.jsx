import logo from '../../img/logo.svg';
import React from 'react';
import styles from './logo.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Logo({className = ''}) {
  const logoClass = cn(styles.logo, className);

  return(
    <a href="/" className={logoClass}>
      <img src={logo} alt="Логотип Лига Банк"/>
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
