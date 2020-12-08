import React from 'react';
import styles from './HabitCheckBtn.module.css';

export default function HabitCheckBtn({ isDisabled, handelClick, label, isCheckMark}) {
    return (

        <button
            disabled={isDisabled}
            onClick={handelClick}
            type="button"
            className={isCheckMark ? styles.checkBtn : styles.crossBtn}
            aria-label={label}
        ></button>
    )
}