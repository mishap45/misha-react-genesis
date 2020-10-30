import React from 'react'
import style from './header.module.css'
import logoPhoto from '../assets/img/star-wars-logo-wallpaper.jpg'
import downArrow from '../assets/icons/icons8-expand-arrow-100.png'

const Header = () => {
    return (
        <div className={style.logoPhotoBlock}>
            <img className={style.logoPhoto} src={logoPhoto} alt="logo photo"/>
            <a href="#"><img className={style.downArrow} src={downArrow} alt=""/></a>
            <a href="#"><img className={style.downArrow1} src={downArrow} alt=""/></a>
        </div>
    )
};

export default Header