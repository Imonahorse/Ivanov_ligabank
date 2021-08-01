import React from 'react';
import PropTypes from 'prop-types';
import styles from './main-menu-item.module.scss';
import cn from 'classnames';

function MainMenuItem({buttonText, isFooter = false, activeButton}) {
  const liClass = cn(
    styles.item,
    isFooter && styles.itemFooter,
    (activeButton === buttonText) && styles.active,
  );

  return (
    <li className={liClass}>
      <a href="/">
        {buttonText}
      </a>
    </li>
  );
}

MainMenuItem.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isFooter: PropTypes.bool.isRequired,
  activeButton: PropTypes.string.isRequired,
};

export default MainMenuItem;
