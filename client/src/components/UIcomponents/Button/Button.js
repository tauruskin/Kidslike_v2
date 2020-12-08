// created by Elena

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({
  handleClick,
  label,
  type,
  orange,
  transparent,
  white
}) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={
        orange
          ? styles.ButtonOrange
          : transparent
          ? styles.ButtonTransparent
          : white
          ? styles.ButtonWhite
          : styles.ButtonGrey
      }
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  orange: PropTypes.bool,
};
