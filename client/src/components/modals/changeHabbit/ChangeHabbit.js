import React, { useState } from 'react';

import styles from './ChangeHabbit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import habitOperations from '../../../redux/habbit/habbitOperations';
import { useDispatch, useSelector } from 'react-redux';

const ChangeHabbit = ({ close, data }) => {
  const dispatch = useDispatch();
  const children = useSelector(state => state.children)

  const [habbitName, setHabbitName] = useState(data.name);
  const [mark, setMark] = useState(data.points);
  const [habbitTarget, setHabbitTarget] = useState(data.childId);

  const handleSubmit = evt => {
    dispatch(
      habitOperations.updateHabit({ name: habbitName, childId: habbitTarget, points: mark }, data._id),
    );
    evt.preventDefault();
    close();
  };

  const handleDelete = () => {
    dispatch(habitOperations.deleteHabit(data._id));
    close();
  };

  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Редагування звички</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Назва</p>
              <input
                defaultValue={data.name}
                className={styles.input}
                onChange={({ target: { value } }) => setHabbitName(value)}
                placeholder="Введіть назву"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Призначення звички</p>
              <select
                value={children.childId}
                className={styles.select}
                onChange={({ target: { value } }) => setHabbitTarget(value)}
                placeholder="Оберіть дитину"
              >
                <option key={children.id} disabled>Оберіть дитину</option>
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

            <button type='button' className={styles.btnDelete} onClick={() => handleDelete()}>
              <span className={styles.btnDeleteIcon}></span> Видалити задачу
            </button>
          </div>
          <div className={styles.buttonsBlock}>
            <button className={styles.buttonSave} type='submit'>Зберегти</button>

            <button className={styles.buttonCancle} onClick={() => close()}>
              Відміна
            </button>
          </div>
        </form>
        <button
          onClick={() => close()}
          className={styles.modalCloseBtn}
        ></button>
      </div>
    </>
  );
};

export default modalBackDrop(ChangeHabbit);
