import React from 'react'
import { BrowserRouter, Link, NavLink, Router } from 'react-router-dom';
import pin from '../../images/header/pin.svg'
import gift from '../../images/header/gift.svg'

export default function Navigation() {
  return (<>
    <BrowserRouter>
      <Link>
        <img src={pin} alt="pin" />
        Звички i задачi
    </Link>
      <Link>
        <img src={gift} alt="gift" />

        Подарунки
    </Link>
    </BrowserRouter>
  </>
  )
}
