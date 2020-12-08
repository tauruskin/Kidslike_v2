import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/header/logo.svg'
import styles from './Logo.module.css'

export default function Logo() {

    return (
        <>
            <div className={styles.logoContainer}>
                <NavLink to='/'>
                    <img className={styles.siteLogo} src={logo} alt='logo' />
                </NavLink>
                <span className={styles.logoText}><span className={styles.bold}>Kidslike&nbsp;</span>v2</span>
            </div>
        </>
    )
}
