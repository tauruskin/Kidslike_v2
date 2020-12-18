import React, { useState } from 'react';

import styles from './AddHabit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import habitOperations from '../../../redux/habit/habitOperations';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderSmall } from '../../UIcomponents/LoaderSmall/LoaderSmall';

const AddHabit = ({ close }) => {
  const dispatch = useDispatch();
  const children = useSelector(state => state.children.userChildrens);
  const loaderHabit = useSelector(state => state.habits.loaderHabit);
  const errorHabit = useSelector(state => state.habits.errorHabit);

  const [habitName, setHabitName] = useState('');
  const [mark, setMark] = useState('');
  const [habitTarget, setHabitTarget] = useState('');
  // здесь нужна будет ф-я, которая возьмёт из state childId по имени ребёнка из селектора
  const handleSubmit = async evt => {
    evt.preventDefault();
    const result = await dispatch(
      habitOperations.addHabit({
        name: habitName,
        childId: habitTarget,
        points: mark,
      }),
    );
    if (result) {
      close();
    }
  };

  return (
    <div className={styles.modalBody}>
      <h2 className={styles.title}>Додавання звички</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
          <label className={styles.label}>
            <p className={styles.inputName}>Назва</p>
            <input
              className={styles.input}
              onChange={({ target: { value } }) => setHabitName(value)}
              placeholder="Введіть назву"
            ></input>
          </label>
          <label className={styles.label}>
            <p className={styles.inputName}>Призначення звички</p>
            <select
              value={children.childId}
              className={styles.select}
              onChange={({ target: { value } }) => setHabitTarget(value)}
              placeholder="Оберіть дитину"
            >
              <option key={children.id}>Оберіть дитину</option>
              {children &&
                children.map(child => (
                  <option key={child._id} value={child._id}>
                    {child.name}
                  </option>
                ))}
            </select>
          </label>
          <label className={styles.label}>
            <p className={styles.inputName}>Бал</p>
            <input
              className={styles.inputMark}
              onChange={({ target: { value } }) => setMark(value)}
              placeholder="__"
            ></input>
          </label>
        </div>
        <div className={styles.buttonsBlock}>
          <button className={styles.buttonSave} onClick={handleSubmit}>
            {!loaderHabit && <span>Зберегти</span>}
            {loaderHabit && <LoaderSmall />}
          </button>

          <button className={styles.buttonCancle} onClick={() => close()}>
            Відміна
          </button>
        </div>
        {errorHabit && <span>Ops ... err={errorHabit}</span>}
      </form>
      <button onClick={() => close()} className={styles.modalCloseBtn}></button>
    </div>
  );
};

export default modalBackDrop(AddHabit);
