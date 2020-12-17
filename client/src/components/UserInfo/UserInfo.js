import React, { useState } from 'react';
import defaultLogo from '../../img/header/userInfo.svg';
import logout from '../../img/header/logout.svg';
import style from './UserInfo.module.css';
import Logout from '../Logout/Logout';

export default function UserInfo() {
  const [showModal, setShowModal] = useState(false);
  const close = () => {
    setShowModal(false);
  };
  const srcLogo = defaultLogo;
  const dispatch = useDispatch();
  const user = useSelector(userSelector.getUser);
  useEffect(() => {
    dispatch(userOperation.getUserInfo());
  }, []);
  // http://kidslike-v2.top/images/defAvatars.svg
  // if (user.avatarURL) {
  // console.log(user.avatarURL.slice(1,1));
    
  // }
  // console.log(user?.avatarURL.slice());
  return (
    <div className={style.userInfoContainer}>
      <img width="40" height='40'
        className={style.userAvatar}
        src={ "http://kidslike-v2.top/images/defAvatars.svg" || srcLogo}
        alt="default logo"
      />
      <div className={style.bubbleWrap}>
        <EditChild />
      </div>
      <span className={style.userName}>{user.username}</span>

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
