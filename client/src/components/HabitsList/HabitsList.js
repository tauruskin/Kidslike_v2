import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HabitItem from '../HabitItem/HabitItem';
import styles from './HabitsList.module.css';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import AddHabit from '../modals/addHabit/AddHabit';
import habitOperations from '../../redux/habit/habitOperations';
import { BoxLoader } from '../UIcomponents/BoxLoader/BoxLoader';

function HabitsList() {
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
  const close = () => {
    setShowAddHabitModal(false);
  };
  const habits = useSelector(state => state.habits.userHabits);
  const loaderHabits = useSelector(state => state.habits.loaderHabitsList);
  const errorHabits = useSelector(state => state.habits.errorHabitsLisr);
  const filteredhabits = habits.filter(habit =>
    habit.daysToComplete.some(day => day.done === null),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(habitOperations.getAllHabits());
  }, []);

  return (
    <div className={styles.listHolder}>
      <div className={styles.gifsTitleContainer}>
        <div className={styles.giftIcon}></div>
        <h1 className={styles.giftTitle}>Звички</h1>
      </div>
      {/* {errorHabits && <div>Error! {errorHabits.message}</div>} */}
      {loaderHabits && <BoxLoader />}
      {!loaderHabits && habits.length === 0 && <p> у вас нет habits</p>}
      {habits.length > 0 && (
        <ul className={styles.HabitList}>
          {filteredhabits.map((el, i) => (
            <li key={el._id} className={styles.HabitItem}>
              <MoreButton type={'habit'} data={el} />
              <HabitItem {...el} />
            </li>
          ))}
        </ul>
      )}
      <Button
        label={'Додати звичку +'}
        handleClick={() => setShowAddHabitModal(true)}
        type={'button'}
        orange={true}
      />
      {showAddHabitModal && <AddHabit close={() => close()} />}
    </div>
  );
}

export default HabitsList;
