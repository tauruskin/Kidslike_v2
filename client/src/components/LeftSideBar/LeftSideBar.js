import React from 'react'
import defaultLogo from '../../img/header/userInfo.svg';
import family from '../../img/header/family.svg';
import star from '../../img/svg/star.svg';
import arrow from '../../img/svg/arrow.svg';

import array from './testArray'
import styles from './LeftSideBar.module.css'

import { NavLink } from 'react-router-dom';

export default function LeftSideBar({ logo = defaultLogo }) {
    return (
        <>
            <div className={styles.GiftContainer}>
                <img src={family} alt="family" />
                <h1 className={styles.title}>Сім’я</h1>
                {array.map((el, i) => {
                    return (<div key={i} className={styles.leftSideBarCard}>
                        <div className={styles.childTitle}>
                            <img
                                className={styles.leftSideBarAvatar}
                                src={logo}
                                alt="default logo"
                            />
                            <h2 className={styles.childName}>Name</h2>
                            <img
                                className={styles.star}
                                src={star}
                                alt="star"
                            />
                            <span>40</span>
                        </div>

                        <div className={styles.task}>
                            <span>Викинути сміття</span><span>+4</span>
                            <span>Викинути сміття</span><span>+4</span>
                        </div>
                        <NavLink to='/'>до виконаних задач <img src={arrow} alt="arrow" /> </NavLink>
                    </div>
                    )
                })}

            </div>
        </>
    )
}

