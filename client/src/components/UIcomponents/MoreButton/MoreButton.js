import React, { useState } from 'react';

import styles from './MoreButton.module.css'

function MoreButton(handleClick) {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <>
            <button className={styles.btn} type='button' onClick={handleClick}></button>
        </>
    )
}

export default MoreButton;