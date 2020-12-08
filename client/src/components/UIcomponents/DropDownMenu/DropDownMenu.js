import React, { useState } from 'react';
import ChangeHabbit from '../../modals/changeHabbit/ChangeHabbit';
    
import styles from './DropDownMenu.module.css';

export default function DropDownMenu() {
    const [showModal, setShowModal] = useState(true);
    const close = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className={styles.options}>
                <button className={styles.optionButton} onclick={() => setShowModal(!showModal)}>Редагувати</button>
                <button className={styles.optionButton} onclick={() => {}}>Видалити</button>
            </div>
            {showModal && <ChangeHabbit close={close}/>}
        </>
    )
}