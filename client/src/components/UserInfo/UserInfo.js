import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultLogo from '../../img/header/userInfo.svg';
import logout from '../../img/header/logout.svg';
import style from './UserInfo.module.css';
import Logout from '../Logout/Logout';

export default function UserInfo() {
  const [showModal, setShowModal] = useState(false);
  const close = () => {
    setShowModal(false);
  };
  const srcLogo = useSelector(state => state.user.avatarURL);

  return (
    <div className={style.userInfoContainer}>
      <img className={style.userAvatar} src={srcLogo} alt="default logo" />
      <span className={style.userName}>Name</span>

      <img
        src={logout}
        alt="logout"
        className={style.logout}
        onClick={() => setShowModal(true)}
      />

      {showModal && <Logout close={() => close()} />}
    </div>
  );
}
