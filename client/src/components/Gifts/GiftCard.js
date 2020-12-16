import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultLogo from '../../img/header/userInfo.svg';
import star from '../../img/svg/star.svg';
import array from './testArray';
import styles from './Gifts.module.css';
// import dots from '../../img/svg/dots-grey.svg'
// import testImg from './test.png'
import defaultImage from './defaultImage.png';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import { getAllGifts } from '../../redux/gifts/giftOperations';

// console.log(styles.giftCard);
export default function GiftCard({ logo = defaultLogo }) {
  const dispatch = useDispatch();
  const gifts = useSelector(state => state.gifts);
  useEffect(() => {
    dispatch(getAllGifts());
  }, []);

  //удалить подарок - поместить айдишник подарка,
  //чтоб при клике на кнопку он отправлялся в запрос
  //например
  // const handleDelete = () => {
  // взять giftId
  //   dispatch(deleteGift(giftId))
  // }

  return (
    <div className={styles.GiftContainer}>
      {gifts.length === 0 && <p> у вас нет gifts</p>}
      {gifts.length > 0 && gifts.map(gift => (
          <div key={gift._id} className={styles.giftCard}>
            <div className={styles.moreBtnFolder}>
              <MoreButton type={'gift'} />
            </div>
            <div className={styles.giftImageContainer}>
              <img
                className={styles.giftAvatar}
                src={logo}
                alt="default logo"
              />
              <img
                className={styles.giftImage}
                src={gift.imageUrl}
                alt={gift.name}
              />
            </div>
            <h2 className={styles.giftName}>{gift.name}</h2>
            <div className={styles.buttonPricePosition}>
              <div className={styles.starPrice}>
                <img
                  // className={styles.}
                  src={star}
                  alt="star"
                />
                <span>40</span>
              </div>
              <button className={styles.giftButton}>Button</button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
