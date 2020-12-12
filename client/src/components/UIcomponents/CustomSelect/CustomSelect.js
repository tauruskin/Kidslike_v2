import React from 'react';
import styles from './CustomSelect.module.css';


export const CustomSelect = ({
  id,
  value,
  name,
  handleChange,
  labelText,
  onBlur,
}) => {
  
  // {/* не стилизируются options, но если использовать материал или подобное, то не будет по факту самого селекта */}
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <div className={styles.select}>
        <select 
        name={name}
        id={id} 
        onChange={handleChange} 
        onBlur={onBlur} 
        value={value}>
          <option value="Оберіть дитину" disabled>
            Оберіть дитину
          </option>
          <option className={styles.option} value="Маша">Маша</option>
          <option className={styles.option} value="Поліна">Поліна</option>
        </select>
      </div>
    </div>
  );
};
