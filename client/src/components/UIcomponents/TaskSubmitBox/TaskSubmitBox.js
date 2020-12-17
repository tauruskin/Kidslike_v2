import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/tasks/taskOperations';
import TaskSubmitButton from '../TaskSubmitButton/TaskSubmitButton';

import styles from './HabitSubmitBox.module.css';

function TaskSubmitBox({id, childId , name , disabled, repeat , isCompleted }) {
  console.log(id,childId)
    const dispatch = useDispatch();
    const handleCompleteAction = () => {
        dispatch(operations.updateTask({
          isCompleted: "true",
          childId: childId,
        },id)
        )
    }
      const handleFailAction = () => {
        dispatch(operations.changeTasksStatus({
            isCompleted: "false"
        },id)
        )
      }
  
  const handleRepeatAction = () => {
     dispatch(
       operations.changeTasksStatus(
         {
           isCompleted: "inProgress",
           childId: childId,
         },
         id,
       ),
     );
  }
  console.log(handleRepeatAction)

    return (
      <div className={styles.submitBox}>
        {isCompleted === "true" ? (
          <>
            <p className={styles.submitBoxTitle}>Повторити</p>
            <TaskSubmitButton
              isRepeatMark={isCompleted}
              handelClick={handleRepeatAction}
              label={'Підтвердити виконання'}
            />
          </>
        ) : (
          <>
            <p className={styles.submitBoxTitle}>Підтвердження</p>
            <TaskSubmitButton
              isCheckMark={true}
              handelClick={handleCompleteAction}
              label={'Підтвердити виконання'}
              isDisabled={disabled}
            />
            <TaskSubmitButton
              handelClick={handleFailAction}
              label={'Підтвердити не виконання'}
              isDisabled={disabled}
            />
          </>
        )}
      </div>
    );

}
export default TaskSubmitBox;
