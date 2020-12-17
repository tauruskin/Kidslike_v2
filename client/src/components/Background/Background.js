import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './Background.module.css'
export default function Background({ children }) {
    const location = useLocation()
    const publicRoute = location.pathname === '/registration' || location.pathname === '/login' 
    const index = location.pathname === '/'
    return (
        <div className={publicRoute ? style.background : index ? [style.background, style.home].join(' '): ""}>
            {children}
        </div>
    )
}
