import React, { Component } from 'react';
import {Link } from "react-router-dom";

export default class LoginView extends Component {
  render() {
    return <>
    <div>LoginView</div>
    <Link
      to="/login"
    >
      Войти
    </Link>
    <Link
      to="/registration"
    >
      Регистрация
    </Link>
    </>
  }
}
