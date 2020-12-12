import React from 'react';
import styles from './logout.module.css';
import modalBackDrop from '../modalBackDrop/ModalBackDrop';
import Button from '../UIcomponents/Button/Button';
import { NavLink } from 'react-router-dom';

const { Container, Text, btn, ButtonWrapper } = styles;
const Logout = ({ close }) => {
  return (
    <>
      <div className={Container}>
        <p className={Text}>Ви впевненi що хочете вийти?</p>
        <div className={ButtonWrapper}>
          <NavLink to="/">
            <Button
              orange={true}
              type="button"
              className={btn}
              handleClick={() => close()}
              label="Так"
            />
          </NavLink>

          <Button
            orange={true}
            type="button"
            className={btn}
            handleClick={() => close()}
            label="Hi"
          />
        </div>
      </div>
    </>
  );
};

export default modalBackDrop(Logout);
