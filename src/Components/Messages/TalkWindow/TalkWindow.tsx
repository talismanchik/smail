import React from 'react';
import style from "../Messanger.module.scss";

export const TalkWindow = () => {
    return (
        <div className={style.history_Container}>

            <div className={style.chatHeader}></div>
            <div className={style.chatBody}></div>
            <div className={style.chatInput}></div>
        </div>
    );
};

