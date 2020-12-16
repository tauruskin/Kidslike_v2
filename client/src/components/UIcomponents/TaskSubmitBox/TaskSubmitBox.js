import React from 'react';
import { useDispatch } from 'react-redux';
import HabitCheckBtn from '../../UIcomponents/HabitCheckBtn/HabitCheckBtn';
import habbitOperations from '../../../redux/habbit/habbitOperations';

import styles from './HabitSubmitBox.module.css';

function TaskSubmitBox({ repeat, id, date, disabled, setIsDone }) {
    const dispatch = useDispatch();
    const onClick = req_data => {
        dispatch(habbitOperations.checkHabitDone(id, req_data));
    };

    return (
        <div className={styles.submitBox}>
   
            <p className={styles.submitBoxTitle}>Підтвердження</p>
            <button
       
                label="Підтвердити виконання"
                type="button"
                className={
                    styles.checkBtn
                }
            ></button>
            <button
       
                label="Підтвердити не виконання"
                type="button"
                className={
                    styles.checkBtn
                }
            ></button>
        
      
        </div>
    );

}
export default TaskSubmitBox;
