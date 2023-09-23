import style from "./Header.module.scss";
import React from "react";

export const Header = () => {
    return <div className={style.header}>
        <div className={style.logoContainer}>
            <img
                src={'https://img.freepik.com/premium-vector/yellow-smiley-face-with-black-eyes-black-line-around-middle_773626-1177.jpg'}
                alt='photo'/>

            <p className={style.nameLogo}>SMAIL</p>
        </div>
    </div>
}