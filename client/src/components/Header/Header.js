import React from 'react'
import styles from './Header.module.css'

export default function Header(props) {
  console.log(props);
  return (
    <header className={styles.header}>
      {props.children}
    </header>
  )
}


