import React from 'react'
import styles from './Header.module.css'

const privatePage = true

export default function Header({ children }) {
  return (
    <header className={privatePage ? styles.headerPrivate : styles.header}>
      {children}
    </header>
  )
}


