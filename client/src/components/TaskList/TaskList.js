import React from 'react';
import TaskItem from '../TaskItem/TaskItem'
import styles from './TaskList.module.css'
import taskTemplate from './taskTemplate.json'
import MoreButton from '../UIcomponents/MoreButton/MoreButton';

export default function TaskList() {
    return (
        <>
            <ul className={styles.HabitList}>
                {taskTemplate.map(el => (
                    <li
                        key={el.startDate}
                        className={styles.HabitItem}
                    >
                        <MoreButton type={'habit'} />
                        <TaskItem  {...el} />
                    </li>
                ))}
            </ul>
        </>
    )
}
