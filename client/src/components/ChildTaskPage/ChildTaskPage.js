import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/children/childrenOperations';
import styles from './ChildTaskPage.module.css';
import transitionStyles from '../HabitsList/transitionStyles.module.css';
import Button from '../UIcomponents/Button/Button';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import boy from '../../img/avatars/boy.png';
import girl from '../../img/avatars/girl.png';
export default function ChildTaskPage() {
  const [tasksDrow, settasksDrow] = useState([]);
  const tasks = useSelector(state => state.tasks.userTasks);
  const children = useSelector(state => state.children.userChildrens);
  // let filteredData = tasksDrow.sort(sortFunc('updatedAt'));
  // console.log(tasksDrow);
  const dispatch = useDispatch();
  const childId = window.location.href.slice(
    window.location.href.lastIndexOf('/') + 1,
  );

  const sortFunc = field => {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  };

  const showMore = () => {
    settasksDrow(
      tasks.filter(el => el.childId === childId).sort(sortFunc('updatedAt')),
    );
  };

  useEffect(() => {
    dispatch(operations.getAllChildren());
  }, []);

  useEffect(
    () => {
      const filterd = tasks
        .filter(el => el.childId === childId)
        .sort(sortFunc('updatedAt'))
        .slice(0, 4);
      settasksDrow(filterd);
    },
    [childId],
    [tasks],
  );

  {
    return (
      <div className={styles.listHolder}>
        {children.map(
          el =>
            el._id === childId && (
              <div key={el._id}>
                <div className={styles.gifsTitleContainer}>
                  <div className={styles.giftIcon}>
                    <img
                      className={styles.leftSideBarAvatar}
                      src={
                        el.gender ? (el.gender === 'male' ? boy : girl) : boy
                      }
                      alt="avatar"
                    />
                  </div>
                  <h1 className={styles.giftTitle}>{el.name}</h1>
                </div>
                <TransitionGroup component="ul" className={styles.HabitList}>
                  {tasksDrow.map(
                    element =>
                      element.childId === el._id &&
                      element.isCompleted === 'true' && (
                        <CSSTransition
                          in={
                            element.childId === el._id &&
                            element.isCompleted === 'true'
                          }
                          key={el._id}
                          timeout={250}
                          classNames={transitionStyles}
                          unmountOnExit
                        >
                          <li
                            key={element._id}
                            className={styles.HabitItem}
                            style={
                              element.isCompleted === 'true'
                                ? { border: '1px solid rgb(126, 242, 157)' }
                                : { border: '1px solid rgb(235, 162, 185)' }
                            }
                          >
                            {/* <MoreButton type={'task'} /> */}
                            <TaskItem {...element} />
                          </li>
                        </CSSTransition>
                      ),
                  )}
                </TransitionGroup>
              </div>
            ),
        )}
        <Button
          label={'Дивитися ще'}
          type={'button'}
          white={true}
          handleClick={showMore}
        />
      </div>
    );
  }
}
