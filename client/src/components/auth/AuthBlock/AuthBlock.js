import React, { useState } from 'react'
import {Link } from "react-router-dom";
import * as queryString from 'query-string';
import styles from './AuthBlock.module.css'
import { LoginForm } from '../../LoginForm/LoginForm';
import { RegisterForm } from '../../RegisterForm/RegisterForm';
import { SocialAuthBtn } from '../../UIcomponents/GoogleFacebBtns/SocialAuthBtn';
import { getAccessTokenFromCode, getGoogleUserInfo, googleLoginUrl } from '../../../helpers/googleLogin';
import BubbleComponent from '../../UIcomponents/BubbleComponent/BubbleComponent';

export const AuthBlock = ({flag, name}) => {
  const [openBubbleGoogle, setOpenBubbleGoogle] = useState(false)
  const [openBubbleFacebook, setOpenBubbleFacebook] = useState(false)

  const loginWithGoogle = () => {
    setOpenBubbleGoogle(!openBubbleGoogle)
    setTimeout(() => setOpenBubbleGoogle(false), 3000);
  }
  const loginWithFacebook = () => {
    setOpenBubbleFacebook(!openBubbleFacebook)
    setTimeout(() => setOpenBubbleFacebook(false), 3000);
  }

  const getAllDataFromGoogle = async (code) => {
    const access_token = await getAccessTokenFromCode(code);
    await getGoogleUserInfo(access_token);
  }

  const urlParams = queryString.parse(window.location.search);
  if (urlParams.error) {
    console.log(`An error occurred: ${urlParams.error}`);
  } else if(urlParams.code) {
    getAllDataFromGoogle(urlParams.code)
  }

  return (
  <div className={styles.container}>
    <p className={styles.title}>{name}</p>
    {flag==='login'? <LoginForm/> : <RegisterForm/>}
    {/* <a href={googleLoginUrl}> <SocialAuthBtn name='Увійти за допомогою Google' google /></a> */}
    <SocialAuthBtn name='Увійти за допомогою Google' google handleClick={loginWithGoogle}/>
    <SocialAuthBtn name='Увійти за допомогою Facebook' facebook handleClick={loginWithFacebook}/>
    {openBubbleGoogle && <BubbleComponent msg="Ми працюємо над цим =)" width='150px' height='35px' top='400px' right='180px'/>}
    {openBubbleFacebook && <BubbleComponent msg="Ми працюємо над цим =)" width='150px' height='35px' top='459px' right='180px'/>}
    
    {flag==='login'?
    <p className={styles.authText}> Немає аккаунту?  <Link className={styles.authLink} to="/registration">Зареєструватись</Link> </p>
    : 
    <p className={styles.authText}> Уже є аккаунт?  <Link className={styles.authLink} to="/login">Увійти</Link> </p>}
  </div>
  )

}