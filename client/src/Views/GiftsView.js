import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import gift from '../img/header/gift.svg';
import styles from '../components/Gifts/Gifts.module.css';
import Button from '../components/UIcomponents/Button/Button';
import AddPresent from '../components/modals/addPresent/AddPresent';
import { GiftList } from '../components/Gifts/GiftList';
import userOperation from '../redux/user/userOperation';

export default function GiftsView() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   dispatch(userOperation.getUserInfo());
  // }, []);

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.gifsTitleContainer}>
            <img className={styles.giftIcon} src={gift} alt="gift" />
            <h1 className={styles.giftTitle}>Подарунки</h1>
          </div>
          <GiftList />
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
