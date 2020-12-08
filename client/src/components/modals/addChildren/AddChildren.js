import React, { useState } from 'react';

import styles from './AddChildren.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';

const AddChildren = ({ close }) => {
  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Додавання дитини</h2>
        <form className={styles.form}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Ім’я дитини</p>
              <input className={styles.input} placeholder="Ім’я"></input>
            </label>
            <p className={styles.childrenTitle}>Оберіть стать дитини</p>
            <label className={styles.customLabel}>
              <input name="test" type="radio" />
              <span className={styles.radiobox}></span>
            </label>
            <p className={styles.customName}>дівчинка</p>
            <label className={styles.customLabel}>
              <input name="test" type="radio" />
              <span className={styles.radiobox}></span>
            </label>
            <p className={styles.customName}>хлопчик</p>
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

export default modalBackDrop(AddChildren);
