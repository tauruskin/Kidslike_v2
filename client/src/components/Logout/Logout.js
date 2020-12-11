import React from 'react';
import styles from './logout.module.css';
import modalBackDrop from '../modalBackDrop/ModalBackDrop'
const {
  Container,
  Text,
 Button,
 ButtonWrapper,
} = styles
const Logout = ({ close  }) =>{
  return (
    <>
      <div className={Container}>
        <p className={Text}>Ви впевненi що хочете вийти?</p>
        <div className={ButtonWrapper}>
          <button className={Button} onClick={() => close()}>
            Так
          </button>
          <button className={Button} onClick={() => close()}>
            Ні
          </button>
        </div>
      </div>
    </>
  );
}


export default modalBackDrop(Logout)