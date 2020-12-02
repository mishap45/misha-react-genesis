import React from 'react'
import style from './header.module.css'
import logoPhoto from '../../assets/img/Header.png'

const Header = () => {
    return (
        <div className={style.logoPhotoBlock}>
            <img src={logoPhoto} alt="logo"/>
        </div>
    )
};

export default Header