import React from 'react';

import styles from './MoreButton.module.css'

function MoreButton(onClick) {
    return (
        <>
            <button className={styles.btn} type='button' onClick={onClick}></button>
        </>
    )
}

export default MoreButton;