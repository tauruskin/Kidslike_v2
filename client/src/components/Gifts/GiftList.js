import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import girl from '../../img//avatars/girl.png';
import boy from '../../img/avatars/boy.png';
import styles from './Gifts.module.css';
import {GiftCard} from './GiftCard';
import { getAllGifts } from '../../redux/gifts/giftOperations';

export function GiftList() {
  const dispatch = useDispatch();
  const gifts = useSelector(state => state.gifts);
  const children = useSelector(state => state.children);
  useEffect(() => {
    dispatch(getAllGifts());
  }, []);

  const defineGender = (gift, children) => {
      const child = children ? children.find(({ _id }) => _id === gift.childId) : null;
      if (child && child.gender) {
          return child.gender === "male" ? boy : girl
      } 
        return boy
  }


  return (
      <div className={styles.GiftContainer}>
    <ul className={styles.GiftList}>
      {gifts.map(gift => (
        <GiftCard key={gift._id} gift={gift} avatar={defineGender(gift, children)}/>
      ))}
    </ul>
    </div>
  );
}
