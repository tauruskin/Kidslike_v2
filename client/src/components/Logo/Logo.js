import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/header/logo.svg'
import logoPrivate from '../../images/header/logoPrivate.svg'

import styles from './Logo.module.css'

const privatePage = true

export default function Logo() {
    const [size, setSize] = useState(1)
    // function resize(params) {
    //     setSize(window.screen.availWidth)
    // }
    // useEffect(() => {
    //     window.addEventListener('resize', resize)
    //     console.log(window.screen.availWidth);
    //     return () => {
    //         return () => {
    //             window.removeEventListener('resize', resize)
    //         }
    //     }
    // }, [])

    // console.log(size);
    return (
        <>
            <div className={styles.logoContainer}>
                <NavLink to='/'>
                    <img className={styles.siteLogo} src={privatePage ? logoPrivate : logo} alt='logo' />
                </NavLink>
                {size && <span className={styles.logoText}>Kidslike&nbsp;<span className={styles.bold}></span>v2</span>}
            </div>
        </>
    )
}
