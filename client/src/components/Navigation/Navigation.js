import React from 'react'
import { NavLink } from 'react-router-dom';
import pin from '../../images/header/pin.svg'
import gift from '../../images/header/gift.svg'

export default function Navigation() {
  return (<>
    <NavLink to='/'>
      <img src={pin} alt="pin" />
        Звички i задачi
    </NavLink>
    <NavLink to='/'>
      <img src={gift} alt="gift" />

        Подарунки
    </NavLink>
  </>
  )
}
