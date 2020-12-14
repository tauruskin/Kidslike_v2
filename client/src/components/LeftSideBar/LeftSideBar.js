import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultLogo from '../../img/header/userInfo.svg';
import family from '../../img/header/family.svg';
import star from '../../img/svg/star.svg';
import arrow from '../../img/svg/arrow.svg';
import Button from '../UIcomponents/Button/Button'
import array from './testArray';
import styles from './LeftSideBar.module.css';
import AddChildren from '../modals/addChildren/AddChildren';

export default function LeftSideBar({ logo = defaultLogo, family: Family }) {
      const [showAddChildren, setShowAddChildren] = useState(false);
    const close = () => { setShowAddChildren(false) };
  return (
    <>
        <div className={Family ? [styles.container, styles.renderClass].join(' ') : styles.container}>
        <div className={styles.titleName}>
            <img src={family} alt="family" className={styles.iconFamily} />
          <h1 className={styles.title}>Сім’я</h1>
        </div>
        <ul className={styles.cardsContainer}>
          {array.map((el, i) => {
            return (
              <li key={i} className={styles.leftSideBarCard}>
                <div className={styles.childTitle}>
                  <img
                    className={styles.leftSideBarAvatar}
                    src={logo}
                    alt="default logo"
                  />
                  <h2 className={styles.childName}>Name</h2>
                  <img className={styles.star} src={star} alt="star" />
                  <span>40</span>
                </div>

                <div className={styles.task}>
                  <ul>
                    <li className={styles.habitsList}>
                      <span className={styles.spanText}>Викинути сміття</span>
                      <span className={styles.spanNumber}>+4</span>
                    </li>
                    <li className={styles.habitsList}>
                      <span className={styles.spanText}>Викинути сміття</span>
                      <span className={styles.spanNumber}>+4</span>
                    </li>
                  </ul>
                </div>
                <NavLink to="/home/child" className={styles.arrowText}>
                  До виконаних задач
                  <img src={arrow} alt="arrow" className={styles.arrow} />{' '}
                </NavLink>
              </li>
            );
          })}
        </ul>
          <Button label={"Додати дитину  +"} transparent={true} type={'button'} handleClick={() => setShowAddChildren(true)} ></Button>
          {showAddChildren && <AddChildren close={() => close()} />}
      </div>
    </>
  );
}
