import React from 'react';
import styles from './logout.module.css';
const {
  Container,
  Text,
 Button,
 ButtonWrapper,
} = styles


const Logout = ({ onClose,  }) =>{
  return (
    <>
      <div className={Container}>
        <p className={Text}>Ви впевненi що хочете вийти?</p>
        <div className={ButtonWrapper}>
          <button className={Button} onClick={onClose}>
            Так
          </button>
          <button className={Button} onClick={onClose}>
            Ні
          </button>
        </div>
      </div>
    </>
  );
}


export default Logout