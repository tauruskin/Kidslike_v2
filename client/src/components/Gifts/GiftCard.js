import React from 'react';
import star from '../../img/svg/star.svg';
import styles from './Gifts.module.css';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';

export function GiftCard({gift, avatar}) {


  return (
          <li className={styles.giftCard}>
            <div className={styles.moreBtnFolder}>
              <MoreButton type={'gift'} data={gift}/>
            </div>
            <div className={styles.giftAvatarContainer}>
              <img
                className={styles.giftAvatar}
                src={avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.giftImageThumb} >
              <img className={styles.giftImage} src={gift.imageUrl} alt={gift.name} />
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
              <button className={styles.giftButton}>Придбати</button>
            </div>
          </li>
        );
  }
