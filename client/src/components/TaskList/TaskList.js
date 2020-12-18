import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import operations from '../../redux/tasks/taskOperations';
import styles from './TaskList.module.css';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import AddTask from '../modals/addTask/AddTask';
import { BoxLoader } from '../UIcomponents/BoxLoader/BoxLoader';
 import transitionStyles from '../HabitsList/transitionStyles.module.css';

export default function TaskList() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const close = () => {
    setShowAddTaskModal(false);
  };
  const tasks = useSelector(state => state.tasks.userTasks);
  const loaderTasks = useSelector(state => state.tasks.loaderTasksList);
  const errorTasks = useSelector(state => state.tasks.errorTasksLisr);

  const filteredTasks = tasks.filter(el => el.isCompleted === 'inProgress');
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(operations.getAllTasks());
  // }, []);

  return (
    <div className={styles.listHolder}>
      <div className={styles.gifsTitleContainer}>
        <div className={styles.giftIcon}></div>
        <h1 className={styles.giftTitle}>Задачі</h1>
      </div>
      {/* {errorTasks && <div>Error! {errorTasks.message}</div>} */}
      {loaderTasks && <BoxLoader />}
      {!loaderTasks && filteredTasks.length === 0 && (
        <p> Додайте задачі для своїх дітей</p>
      )}
      {filteredTasks.length > 0 && (
        <TransitionGroup component="ul" className={styles.HabitList}>
          {filteredTasks.map(el => (
             <CSSTransition
              in={filteredTasks.length > 0}
              key={el._id}
              timeout={250}
              classNames={transitionStyles}
              unmountOnExit>
            <li key={el._id} className={styles.HabitItem}>
              <MoreButton type={'task'} data={el} />
              <TaskItem {...el} />
            </li>
             </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      <Button
        label={'Додати задачу +'}
        handleClick={() => setShowAddTaskModal(true)}
        type={'button'}
        orange={true}
      />
      {showAddTaskModal && <AddTask close={() => close()} />}
    </div>
  );
}