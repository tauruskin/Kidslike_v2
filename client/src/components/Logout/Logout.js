import React from 'react';
import styles from './logout.module.css';
import modalBackDrop from '../modalBackDrop/ModalBackDrop'
import moduleName from '../UIcomponents/Button/Button'
import { orange } from '@material-ui/core/colors';
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
          {/* <button className={Button} onClick={() => close()}>
            Так
          </button> */}
          <Button className={(orange, Button)} onClick={() => close()}>
            Так
          </Button>
          <Button className={(orange, Button)} onClick={() => close()}>
            Ні
          </Button>
          {/* <button className={Button} onClick={() => close()}>
           
          </button> */}
        </div>
      </div>
    </>
  );
}


export default modalBackDrop(Logout)