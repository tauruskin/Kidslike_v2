import React, { useState } from 'react';
import ChangeHabbit from '../../modals/changeHabbit/ChangeHabbit';
import ChangeTask from '../../modals/changeTask/ChangeTask';
    
import styles from './BubbleComponent.module.css';

export default function BubbleComponent({ modalType, handleClick, msg, width, height, top}) {
    const [showModal, setShowModal] = useState(false);
    const close = () => {
        setShowModal(!showModal);
    };

    return (
        msg ? <div style = {{width:width,height:height,top:top}}
        className={styles.arrowBox}><p className={styles.authText}>{msg}</p></div> : 
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