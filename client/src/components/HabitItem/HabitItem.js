import React from 'react';
import boy from '../../images/avatars/boy_in_frame.png';
import girl from '../../images/avatars/girl_in_frame.png';
import HabitSubmitBox from '../UIcomponents/HabitSubmitBox/HabitSubmitBox';

import styles from './HabitItem.module.css';

function HabitItem({ gender, habitName, points, startDate, days }) {
  return (
    <div className={styles.habitItemFolder}>
      <img
        className={styles.avatar}
        src={gender === 'boy' ? boy : girl}
        alt="avatar"
      ></img>
      <div className={styles.habitContentWrapper}>
        <p className={styles.habitTitle}>{habitName}</p>
        <ul className={styles.daysList}>
          {days.map(el => (
            <li className={styles.daysItem}>
              <span className={styles.points}>{points}</span>
            </li>
          ))}
        </ul>
        <p className={styles.text}>x1.5</p>
      </div>
      <HabitSubmitBox />
    </div>
  );
}

export default HabitItem;
