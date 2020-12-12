import React from 'react';
import { NavLink } from 'react-router-dom';
import pin from '../../img/header/pin.svg';
import gift from '../../img/header/gift.svg';
import family from '../../img/header/family.svg';

import styles from './Navigation.module.css';

export default function Navigation({ familyRender }) {
  return (
    <>
      <ul className={styles.navList}>
        <li onClick={familyRender} className={[styles.listItem, styles.family].join(' ')}>
          {/* <NavLink className={styles.navLink} to="/"> */}
          <img className={styles.itemImg} src={family} alt="pin" />
          <span>
            Сім’я
            </span>
          {/* </NavLink> */}
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to="/home">
            <img className={styles.itemImg} src={pin} alt="pin" />
            <span>
              Звички i задачi
            </span>
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.navLink} to="/home/gifts">
            <img className={styles.itemImg} src={gift} alt="gift" />
            <span>
              Подарунки
            </span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
