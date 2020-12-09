import React from 'react';
import { NavLink } from 'react-router-dom';
import pin from '../../img/header/pin.svg';
import gift from '../../img/header/gift.svg';
import family from '../../img/header/family.svg';

import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <ul className={styles.navList}>
        <li className={[styles.listItem, styles.family].join(' ')}>
          <img className={styles.itemImg} src={family} alt="pin" />
          <NavLink className={styles.navLink} to="/">
            Сім’я
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <img className={styles.itemImg} src={pin} alt="pin" />
          <NavLink className={styles.navLink} to="/">
            Звички i задачi
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <img className={styles.itemImg} src={gift} alt="gift" />
          <NavLink className={styles.navLink} to="/gifts">
            Подарунки
          </NavLink>
        </li>
      </ul>
    </>
  );
}
