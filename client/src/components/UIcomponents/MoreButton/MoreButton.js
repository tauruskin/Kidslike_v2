import React, { useState } from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu'

import styles from './MoreButton.module.css'

function MoreButton({type}) {
    const [showDropDown, setShowDropDown] = useState(false);
    const close = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <div className={styles.drop_down_folder}>
            <button className={styles.btn} type='button' onClick={() => close()}></button>
            {showDropDown && <DropDownMenu modalType={type} handleClick={() => close()} />}
        </div>
    )
}

export default MoreButton;