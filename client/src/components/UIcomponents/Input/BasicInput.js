import React from 'react'
import styles from './BasicInput.module.css'

export const BasicInput = ({
  lastchild,
  forLabel,
  id,
  labelText,
  value,
  name,
  handleChange,
  placeholder,
  labelWidth,
  inputWidth,
  type,
  password,
  onBlur
}) => 
{
  const inputClasses = [styles.input];
  // will be uncomment tomorrow when add validation  (don't delete)
  

  // const error = error ? <div className={styles.input__error}>{error ? error.message : null}</div> : null;
  // if (disabled) inputClasses.push(styles.input_disabled);

  if(password) inputClasses.push(styles.input_password);
  if(lastchild) inputClasses.push(styles.lastChild);

  return (
    <div className={styles.inputBlock}>
      <label
        htmlFor={forLabel}
        className={styles.label}
        style={{ width: labelWidth }}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={inputClasses.join(' ')}
        value={value}
        name={name}
        placeholder={placeholder}
        style={{ width: inputWidth }}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </div>
  );
}