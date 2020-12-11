import React, {Component} from 'react';
import defaultLogo from '../../img/header/userInfo.svg';
import logout from '../../img/header/logout.svg';
import style from './UserInfo.module.css';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';
import LogoutModal from '../Logout/LogoutModal'


export default class UserInfo extends Component  {
  state = {
    isModalOpen: false,
  };
  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
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
            <img src={logout} alt="logout" className={style.logout} onClick={this.handleOpenModal} />
          </NavLink>
          {this.state.isModalOpen && <LogoutModal onClose={this.handleCloseModal}>
            <Logout onClose={this.handleCloseModal} />
          </LogoutModal>}
        </div>
      </>
    );
  }
}
