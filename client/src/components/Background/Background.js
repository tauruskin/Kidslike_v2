import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './Background.module.css'
export default function Background({ children }) {
    const location = useLocation()
   const publicRoute = location.pathname === '/registration'|| location.pathname === '/login'||location.pathname === '/'
    return (
    <div className={  publicRoute ? style.background: ''}>
            {children}
        </div>
    )
}
