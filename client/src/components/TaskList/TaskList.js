import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem'
import styles from './TaskList.module.css'
import taskTemplate from './taskTemplate.json'
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import AddTask from '../modals/addTask/AddTask';

export default function TaskList() {
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const close = () => { setShowAddTaskModal(false) };

    return (
        <div className={styles.listHolder}>
            <div className={styles.gifsTitleContainer}>
                <div className={styles.giftIcon}></div>
                <h1 className={styles.giftTitle}>Задачі</h1>
            </div>
            <ul className={styles.HabitList}>
                {taskTemplate.map(el => (
                    <li
                        key={el.startDate}
                        className={styles.HabitItem}
                    >
                        <MoreButton type={'task'} />
                        <TaskItem  {...el} />
                    </li>
                ))}
            </ul>
            <Button label={'Додати задачу +'} handleClick={() => setShowAddTaskModal(true)} type={'button'} orange={true} />
            {showAddTaskModal && <AddTask close={() => close()} />}
        </div>
    )
}
