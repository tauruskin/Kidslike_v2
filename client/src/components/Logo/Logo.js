import React from 'react'
import logo from '../../images/header/logo.svg'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <>
            <img className={styles.siteLogo} src={logo} alt='logo' />
            <span className={styles.logoText}><span className={styles.bold}>Kidslike</span> v2</span>
        </>
    )
}
