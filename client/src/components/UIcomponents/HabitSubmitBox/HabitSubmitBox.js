import React from 'react';
import HabitCheckBtn from '../../UIcomponents/HabitCheckBtn/HabitCheckBtn'

import styles from './HabitSubmitBox.module.css';

function HabitSubmitBox() {
    return (
        <div className={styles.submitBox}>
            <p className={styles.submitBoxTitle}>Підтвердження</p>
            <HabitCheckBtn isCheckMark={true} handelClick={() => { }} label={'Підтвердити виконання'}/>
            <HabitCheckBtn handelClick={() => { }} label={'Підтвердити не виконання'} />
        </div>
    )
}

export default HabitSubmitBox;