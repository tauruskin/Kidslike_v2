import React, { useState } from 'react';

import styles from './ChangeHabit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import habitOperations from '../../../redux/habit/habitOperations';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderSmall } from '../../UIcomponents/LoaderSmall/LoaderSmall';

const ChangeHabit = ({ close, data }) => {
  const dispatch = useDispatch();
  const children = useSelector(state => state.children);
  const loaderHabit = useSelector(state => state.habits.loaderHabit);
  const errorHabit = useSelector(state => state.habits.errorHabit);

  const [habitName, setHabitName] = useState(data.name);
  const [mark, setMark] = useState(data.points);
  const [habitTarget, setHabitTarget] = useState(data.childId);

  const handleSubmit = async evt => {
    evt.preventDefault();
    const result = await dispatch(
      habitOperations.updateHabit(
        { name: habitName, childId: habitTarget, points: mark },
        data._id,
      ),
    );
    if (result) {
      close();
    }
  };

  const handleDelete = () => {
    dispatch(habitOperations.deleteHabit(data._id));
    close();
  };

  return (
    <div className={styles.modalBody}>
      <h2 className={styles.title}>Редагування звички</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
          <label className={styles.label}>
            <p className={styles.inputName}>Назва</p>
            <input
              defaultValue={data.name}
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
              <option key={children.id} disabled>
                Оберіть дитину
              </option>
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
              defaultValue={data.points}
              className={styles.inputMark}
              onChange={({ target: { value } }) => setMark(value)}
              placeholder="__"
            ></input>
          </label>

          <button
            type="button"
            className={styles.btnDelete}
            onClick={() => handleDelete()}
          >
            <span className={styles.btnDeleteIcon}></span> Видалити задачу
          </button>
        </div>
        <div className={styles.buttonsBlock}>
          <button className={styles.buttonSave} type="submit">
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

export default modalBackDrop(ChangeHabit);
