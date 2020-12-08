import React, { useState } from 'react';
import HabitCheckBtn from '../../UIcomponents/HabitCheckBtn/HabitCheckBtn'
import MoreButton from '../MoreButton/MoreButton'
import DropDownMenu from '../DropDownMenu/DropDownMenu'

import styles from './HabitSubmitBox.module.css';

function HabitSubmitBox() {
    const [showDropDown, setShowDropDown] = useState(true);
    return (
        <div className={styles.submitBox}>
            <p className={styles.submitBoxTitle}>Підтвердження</p>
            <HabitCheckBtn isCheckMark={true} handelClick={() => { }} label={'Підтвердити виконання'}/>
            <HabitCheckBtn handelClick={() => { }} label={'Підтвердити не виконання'} />
            <MoreButton handleClick={() => { setShowDropDown(true) }} />
            {showDropDown && <DropDownMenu/>}
        </div>
    )
}

export default HabitSubmitBox;