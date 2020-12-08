import React from 'react';
import boy from '../../Images/avatars/boy_in_frame.png'
import girl from '../../Images/avatars/girl_in_frame.png'
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import HabitCheckDiv from '../UIcomponents/HabitCheckDiv/HabitCheckDiv';

import styles from './HabitItem.module.css'
// import habitsTemplate from './habitsTemplate'


function HabitItem({ gender, habitName, points, startDate, days}) {
    return (
        <div>
            <img className={styles.avatar} src={gender === "boy" ? boy : girl} alt='avatar'></img>
            {/* <div className={styles.habitData}> */}
            <p className={styles.habitTitle}>{habitName}</p>
            <ul className={styles.daysList}>
                {days.map(el => (
                    <li className={styles.daysItem}><span className={styles.points}>{points}</span></li>
                ))}
            </ul>
            <p className={styles.text}>x1.5</p>
            {/* </div> */}
            {/* <HabitCheckDiv/> */}
            <MoreButton onClick={()=>{}}/>
        </div>
    )
}


export default HabitItem;