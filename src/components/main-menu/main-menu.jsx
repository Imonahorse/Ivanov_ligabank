import React from 'react';
import MainMenuItem from '../main-menu-item/main-menu-item';
import styles from './main-menu.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mainMenuButtons = [
  'Услуги',
  'Рассчитать кредит',
  'Конвертер валют',
  'Контакты',
  'Задать вопрос',
];

function MainMenu({isFooter = false}) {
  const activeButton = mainMenuButtons[2];
  const menuClass = cn(styles.list, isFooter && styles.listFooter);

  return (
    <ul className={menuClass}>
      {mainMenuButtons.map((buttonText, index) => {
        if (isFooter && index === 2) {
          return '';
        }

        return (
          <MainMenuItem
            activeButton={activeButton}
            buttonText={buttonText}
            key={buttonText}
            isFooter={isFooter}
          />
        );
      })}
    </ul>
  );
}

MainMenu.propTypes = {
  isFooter: PropTypes.bool,
};

export default MainMenu;
