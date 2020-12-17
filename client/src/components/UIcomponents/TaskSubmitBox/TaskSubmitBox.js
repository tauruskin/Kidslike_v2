import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/tasks/taskOperations';

import styles from './HabitSubmitBox.module.css';

function TaskSubmitBox({ status ,id, childId , name , isCompleted }) {
    const dispatch = useDispatch();
    const handleCompleteAction = () => {
        dispatch(operations.updateTask({
          isCompleted: true,
          childId: childId,
      
        },id)
        )
    }
      const handleFailAction = () => {
        dispatch(operations.changeTasksStatus({
            isCompleted: false
        },id)
        )
    }
console.log(isCompleted)
    return (
      <div className={styles.submitBox}>
        {isCompleted ? (
          <>
            <p className={styles.submitBoxTitle}>Повторити</p>
            <button
              onClick={handleCompleteAction}
              label="Повторити виконання"
              type="button"
              className={styles.repeatBtn}
            ></button>
          </>
        ) : (
          <>
            <p className={styles.submitBoxTitle}>Підтвердження</p>
            <button
              onClick={handleCompleteAction}
              label="Підтвердити виконання"
              type="button"
              className={styles.checkBtn}
            ></button>
            <button
              onClick={handleFailAction}
              label="Підтвердити не виконання"
              type="button"
              className={styles.crossBtn}
            ></button>
          </>
        )}
      </div>
    );

}
export default TaskSubmitBox;
