// created by Elena

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import useSpinner from '../Spinner/useSpinner';

export default function Button({
  handleClick,
  label,
  type,
  orange,
  transparent,
  white, 
  bordered,
  disabled
}) {
  const [spinner, showSpinner, hideSpinner] = useSpinner();

  const loader = () => {
    showSpinner();
    setTimeout(() => hideSpinner(), 500);
  }
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleClick}
      onClick={loader}
      className={
        orange
          ? styles.ButtonOrange
          : transparent
          ? styles.ButtonTransparent
          : white
          ? styles.ButtonWhite :
          bordered 
          ?  styles.ButtonBordered
          : styles.ButtonGrey
      }
    >
      {label}
      {spinner}
    </button>
    
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  orange: PropTypes.bool,
  disabled: PropTypes.bool,
};
