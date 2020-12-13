import React, { useState } from 'react';
import gift from '../img/header/gift.svg';
import styles from '../components/Gifts/Gifts.module.css';
import GiftCard from '../components/Gifts/GiftCard';
import Button from '../components/UIcomponents/Button/Button';
import AddPresent from '../components/modals/addPresent/AddPresent';

export default function GiftsView() {
  const [showModal, setShowModal] = useState(false);
  const close = () =>  setShowModal(false);
  const open = () => setShowModal(true);
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.gifsTitleContainer}>
            <img className={styles.giftIcon} src={gift} alt="gift" />
            <h1 className={styles.giftTitle}>Подарунки</h1>
          </div>
          <GiftCard />
          <Button
            handleClick={open}
            orange={true}
            type="button"
            label="Додати подарунок  +"
          />
        </div>
        {showModal && <AddPresent close={close} />}
      </div>
    </>
  );
}
