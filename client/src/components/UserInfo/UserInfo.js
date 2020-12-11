import React, {Component, useState} from 'react';
import defaultLogo from '../../img/header/userInfo.svg';
import logout from '../../img/header/logout.svg';
import style from './UserInfo.module.css';
import { NavLink } from 'react-router-dom';
// import Logout from '../Logout/Logout';
// import LogoutModal from '../Logout/LogoutModal'
import Logout from '../Logout/Logout'


export default function UserInfo()  {
  // state = {
  //   isModalOpen: false,
  // };
  // handleOpenModal = () => {
  //   this.setState({ isModalOpen: true });
  // };
  // handleCloseModal = () => {
  //   this.setState({ isModalOpen: false });
  const [showModal, setShowModal] = useState(false)
  const close = () => {setShowModal(false)}



  
 
    return (
      <>
        <div className={style.userInfoContainer}>
          <img
            className={style.userAvatar}
            src={defaultLogo}
            alt="default logo"
          />
          <span className={style.userName}>Name</span>
          <NavLink to="/">
            <img src={logout} alt="logout" className={style.logout} onClick={() => setShowModal(true)} />
          </NavLink>
          {showModal && <Logout close={() => close()}/>}
        </div>
      </>
    );

}
