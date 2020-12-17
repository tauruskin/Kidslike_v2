import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import BubbleComponent from '../BubbleComponent/BubbleComponent'

import styles from './MoreButton.module.css'

function MoreButton({type, data}) {
    const [showDropDown, setShowDropDown] = useState(false);
    const close = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <div className={styles.drop_down_folder}>
            <button className={styles.btn} type='button' onClick={() => close()}></button>
            {showDropDown &&
                <>
                <Backdrop handleClick={() => close()}/>
                <BubbleComponent modalType={type} handleClick={() => close()} taskData={data} habitData={data} giftData={data} />
                </>
            }
        </div>
    )
}

export default MoreButton;