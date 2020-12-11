import React, {useState} from 'react';
import HabitItem from '../HabitItem/HabitItem'
import styles from './HabitsList.module.css'
import habitsTemplate from '../HabitItem/habitsTemplate.json'
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import AddHabbit from '../modals/addHabbit/AddHabbit';

function HabitsList() {
    const [showAddHabitModal, setShowAddHabitModal] = useState(false);
    const close = () => { setShowAddHabitModal(false) };

    return (
        <div className={styles.listHolder}>
            <div className={styles.gifsTitleContainer}>
                <div className={styles.giftIcon}></div>
                <h1 className={styles.giftTitle}>Звички</h1>
            </div>
            <ul className={styles.HabitList}>
                {habitsTemplate.map((el, i) => (
                    <li
                        key={el.startDate}
                        className={styles.HabitItem}
                    >
                        <MoreButton type={'habit'} />
                        <HabitItem {...el}/>
                        </li>
                ))}
            </ul> 
            <Button label={'Додати звичку +'} handleClick={() => setShowAddHabitModal(true)} type={'button'} orange={true} />
            {showAddHabitModal && <AddHabbit close={() => close()}/>}
        </div>
    )
}



export default HabitsList;