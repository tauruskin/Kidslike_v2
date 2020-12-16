import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/tasks/taskOperations';

import styles from './HabitSubmitBox.module.css';

function TaskSubmitBox({ status ,id}) {
    const dispatch = useDispatch();
    const handleCompleteAction = () => {
        dispatch(operations.updateTask({
            isCompleted: true
        },id)
        )
    }
      const handleFailAction = () => {
        dispatch(operations.changeTasksStatus({
            isCompleted: false
        },id)
        )
    }

    return (
      <div className={styles.submitBox}>
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
      </div>
    );

}
export default TaskSubmitBox;
