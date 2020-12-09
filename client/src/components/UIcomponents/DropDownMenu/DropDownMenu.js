import React, { useState } from 'react';
import ChangeHabbit from '../../modals/changeHabbit/ChangeHabbit';
import ChangeTask from '../../modals/changeTask/ChangeTask';
    
import styles from './DropDownMenu.module.css';

export default function DropDownMenu({ modalType, handleClick}) {
    const [showModal, setShowModal] = useState(false);
    const close = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className={styles.reviews}>
                <div className={styles.comment}>
                    <div className={styles.comment_bubble}>
                        <button className={styles.optionButton} onClick={() => close()}>Редагувати</button>
                        <button className={styles.optionButton} onClick={() => { }}>Видалити</button>
                    </div>
                </div>
            </div>
            {modalType === 'habit' && showModal && <ChangeHabbit close={() => { close(); handleClick() }} />}
            {modalType === 'task' && showModal && <ChangeTask close={() => { close(); handleClick() }} />}
            {/* {modalType === 'gift' && showModal && <ChangeGift close={close} />} */}
        </>
    )
}