import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/UIcomponents/Button/Button';
import styles from '../components/auth/TokenVerifyView.module.css'

class TokenVerifyView extends Component{
  render() {
    return(
      <>
      <div className={styles.container}>
        <p className={styles.text}>Ваша пошта успішно підтверджена</p>
        <Link to={'/login'}>
          <Button orange label='Виконати вхід в додаток' type='button'></Button>
        </Link>
      </div>
      </>
    )
  }
}

export default TokenVerifyView;
