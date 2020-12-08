import React, { useState } from 'react';

import styles from './DropDownMenu.module.css'

export default function DropDownMenu() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <ul className={styles.options}>
                <li className={styles.optionButton} onclick={()=> {setShowModal(true)}}></li>
                <li className={styles.optionButton} onclick={() => {}}></li>
            </ul>
        </>
    )
}