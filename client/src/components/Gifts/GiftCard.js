import React from 'react'
import defaultLogo from '../../img/header/userInfo.svg';
import star from '../../img/svg/star.svg';
import array from './testArray'
import styles from './Gifts.module.css'
import dots from '../../img/svg/dots-grey.svg'
import testImg from './test.png'
console.log(styles.giftCard);
export default function GiftCard() {
    return (
        <div>
            {array.map((el, i) => {
                return (<div key={i} className={styles.giftCard}>   <img
                    className={styles.dotsImage}
                    src={dots}
                    alt="dots"
                />
                    <img
                        // className={style.}
                        src={defaultLogo}
                        alt="default logo"
                    />
                    <img
                        // className={style.}
                        src={testImg}
                        alt="default logo"
                    />
                    <h2>Name Gift</h2>
                    <img
                        // className={style.}
                        src={star}
                        alt="star"
                    />
                    <span>Rating</span>
                    <button>Button</button></div>)
            })}

        </div>
    )
}
