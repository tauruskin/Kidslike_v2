import React from 'react';
import HabitItem from '../HabitItem/HabitItem'
import styles from './HabitsList.module.css'
import habitsTemplate from '../HabitItem/habitsTemplate.json'

function HabitsList() {
    return (
        <>
            <ul className={styles.HabitList}>
                {habitsTemplate.map(el => (
                    <li
                        key={el.startDate}
                        className={styles.HabitItem}
                        >
                        <HabitItem  {...el}/>
                        </li>
                ))}
            </ul> 
        </>
    )
}



export default HabitsList;