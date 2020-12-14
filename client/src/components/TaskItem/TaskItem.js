import React from 'react';
import boy from '../../img/avatars/boy_in_frame.png';
import girl from '../../img/avatars/girl_in_frame.png';
import HabitSubmitBox from '../UIcomponents/HabitSubmitBox/HabitSubmitBox';

import styles from './TaskItem.module.css';

export default function TaskItem({ gender, name, points, startDate, daysToComplete }) {
    return (
        <div className={styles.habitItemFolder}>
            <img
                className={styles.avatar}
                src={gender === 'boy' ? boy : girl}
                alt="avatar"
            ></img>
            <div className={styles.taskContentWrapper}>
                <div className={styles.taskInfo}>
                    <p className={styles.habitTitle}>{name}</p>
                    <p className={styles.habitPoints}>{points}</p>  
                </div>
                {daysToComplete &&
                    <div className={styles.taskTime}>
                        <p className={styles.text}>Час на виконання:</p>
                        <p className={styles.days}>{daysToComplete} день</p>
                    </div>}
                <HabitSubmitBox repeat={false}/>
            </div>
        </div>
    );
}

