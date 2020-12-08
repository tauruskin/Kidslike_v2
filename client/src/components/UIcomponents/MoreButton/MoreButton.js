import React, { useState } from 'react';

import styles from './MoreButton.module.css'

function MoreButton({onClick}) {
    // const [showDropDown, setShowDropDown] = useState(false);

    return (
        <>
            <button className={styles.btn} type='button' onClick={onClick}></button>
        </>
    )
}

export default MoreButton;