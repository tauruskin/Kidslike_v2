import React from 'react';
import styles from './HabitCheckBtn.module.css';

export default function TaskSubmitButton({
  isDisabled,
  handelClick,
  label,
  isCheckMark,
  isRepeatMark,
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handelClick}
      type="button"
      className={
        isCheckMark === "inProgress"
          ? styles.checkBtn
          : isRepeatMark === "true"
                  ? styles.repeatBtn
                  : 
                  styles.crossBtn
      }
      aria-label={label}
    ></button>
  );
}
