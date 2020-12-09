import React from 'react'
import gift from '../img/header/gift.svg'
import styles from '../components/Gifts/Gifts.module.css'
import GiftCard from '../components/Gifts/GiftCard'
import Button from '../components/UIcomponents/Button/Button'

export default function GiftsView() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <div className={styles.gifsTitleContainer}>
                        <img className={styles.giftIcon} src={gift} alt="gift" />
                        <h1 className={styles.giftTitle}>Подарунки</h1>
                    </div>

                    <GiftCard />
                    <Button orange={true} type="button" label="Додати подарунок  +" />
                </div>

            </div>
        </>
    )
}
