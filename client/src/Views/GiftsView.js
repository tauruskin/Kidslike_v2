import React from 'react'
import gift from '../img/header/gift.svg'
import styles from '../components/Gifts/Gifts.module.css'
import GiftCard from '../components/Gifts/GiftCard'

export default function GiftsView() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.giftImage} src={gift} alt="gift" />
                <h1 className={styles.giftTitle}>Подарунки</h1>
            </div>
            <GiftCard />
        </>
    )
}
