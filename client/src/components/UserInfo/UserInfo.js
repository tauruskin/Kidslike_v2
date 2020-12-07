import React from 'react'
import defaultLogo from '../../images/header/userInfo.svg'
import logout from '../../images/header/logout.svg'
import style from './UserInfo.module.css'
export default function UserInfo() {
  return (
    <>
      <img src={defaultLogo} alt="default logo" />
      <span className={style.userName} >Name</span>
      <img src={logout} alt='logout' className={style.logout} />
    </>
  )
}
