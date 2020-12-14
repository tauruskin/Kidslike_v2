import React, { useState } from 'react';
import styles from './AddTask.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import operations from '../../../redux/tasks/taskOperations';
import { useDispatch } from 'react-redux';

const AddTask = ({ close }) => {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');
  const [mark, setMark] = useState('');
  const [taskTarget, setTaskTarget] = useState('');
  const [taskDays, setTaskDays] = useState('');

  const handleSubmit = evt => {
    console.log(
      'taskName:',
      taskName,
      'mark:',
      mark,
      'taskTarget',
      taskTarget,
      'taskDays',
      taskDays,
    );

    dispatch(
     operations.AddTask({
        name: taskName,
        childId: taskTarget,
        points: mark,
        days: taskDays,
      }),
    );
    evt.preventDefault();
    close();
  };

  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Додавання задачі</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Назва</p>
              <input
                className={styles.input}
                onChange={({ target: { value } }) => setTaskName(value)}
                placeholder="Введіть назву"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Призначення звички</p>
              <select
                className={styles.select}
                onChange={({ target: { value } }) => setTaskTarget(value)}
                placeholder="Оберіть дитину"
              >
                <option disabled>Выберите героя</option>
                <option value="Чебурашка">Чебурашка</option>
                <option value="Крокодил Гена">Крокодил Гена</option>
                <option value="Шапокляк">Шапокляк</option>
                <option value="Крыса Лариса">Крыса Лариса</option>
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
            <label className={styles.label}>
              <p className={styles.inputName}>
                Дні на виконання (необов’язково)
              </p>

              <input
                className={styles.inputDays}
                onChange={({ target: { value } }) => setTaskDays(value)}
                placeholder="___"
              ></input>
            </label>
          </div>
          <div className={styles.buttonsBlock}>
            <button className={styles.buttonSave}>Зберегти</button>

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

export default modalBackDrop(AddTask);
