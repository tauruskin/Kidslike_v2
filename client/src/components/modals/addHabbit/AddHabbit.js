import React, { useState } from 'react';

import styles from './AddHabbit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';

const AddHabbit = ({ close }) => {
  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Додавання звички</h2>
        <form className={styles.form}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Назва</p>
              <input
                className={styles.input}
                placeholder="Введіть назву"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Призначення звички</p>
              <input
                className={styles.input}
                placeholder="Оберіть дитину"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Бал</p>

              <input className={styles.inputMark} placeholder="__"></input>
            </label>
          </div>
          <div className={styles.buttonsBlock}>
            <button className={styles.buttonSave}>Зберегти</button>

            <button className={styles.buttonCancle} onClick={() => close()}>
              Відміна
            </button>
          </div>
        </form>
        <button
          onClick={() => close()}
          className={styles.modalCloseBtn}
        ></button>
      </div>
    </>
  );
};

export default modalBackDrop(AddHabbit);
