import React, { useState } from 'react';
import styles from './AddTask.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import operations from '../../../redux/tasks/taskOperations';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderSmall } from '../../UIcomponents/LoaderSmall/LoaderSmall';

const AddTask = ({ close }) => {
  const dispatch = useDispatch();
  const children = useSelector(state => state.children.userChildrens);
  const loaderTask = useSelector(state => state.tasks.loaderTask);
  const errorTask = useSelector(state => state.tasks.errorTask);

  const [taskName, setTaskName] = useState('');
  const [mark, setMark] = useState('');
  const [taskTarget, setTaskTarget] = useState('');
  const [taskDays, setTaskDays] = useState('10');

  const handleSubmit = async evt => {
    evt.preventDefault();
    const result = await dispatch(
      operations.addTask({
        name: taskName,
        childId: taskTarget,
        points: mark,
        daysToComplete: taskDays,
      }),
    );
    if (result) {
      close();
    }
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
              <p className={styles.inputName}>Призначення задачі</p>
              <select
                value={children.childId}
                className={styles.select}
                onChange={({ target: { value } }) => setTaskTarget(value)}
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
            <button className={styles.buttonSave} onClick={handleSubmit}>
              {!loaderTask && <span>Зберегти</span>}
              {loaderTask && <LoaderSmall />}
            </button>

            <button className={styles.buttonCancle} onClick={() => close()}>
              Відміна
            </button>
          </div>
          {errorTask && <span>Ops ... err={errorTask}</span>}
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
