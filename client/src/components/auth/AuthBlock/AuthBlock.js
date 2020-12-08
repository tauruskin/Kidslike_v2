import React from 'react'
import {Link } from "react-router-dom";
import styles from './AuthBlock.module.css'
import { LoginForm } from '../../LoginForm/LoginForm';
import { RegisterForm } from '../../RegisterForm/RegisterForm';
import { SocialAuthBtn } from '../../UIcomponents/GoogleFacebBtns/SocialAuthBtn';


export const AuthBlock = ({flag, name}) => {

  const loginWithGoogle = () => {
    // here will be funk for signin by google
  }
  const loginWithFacebook = () => {
    // here will be funk for signin by facebook
  }

  return (
  <div className={styles.container}>
    <p className={styles.title}>{name}</p>
    {flag==='login'? <LoginForm/> : <RegisterForm/>}
    <SocialAuthBtn name='Увійти за допомогою Google' google handleClick={loginWithGoogle}/>
    <SocialAuthBtn name='Увійти за допомогою Facebook' facebook handleClick={loginWithFacebook}/>


    {flag==='login'?
    <p className={styles.authText}> Немає аккаунту?  <Link className={styles.authLink} to="/registration">Зареєструватись</Link> </p>
    : 
    <p className={styles.authText}> Уже є аккаунт?  <Link className={styles.authLink} to="/login">Увійти</Link> </p>}
  </div>
  )
  
}