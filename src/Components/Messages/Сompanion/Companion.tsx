import React from 'react';
import style from '../Messanger.module.scss'
import {NavLink} from "react-router-dom";

type CompanionPropsType = {
    avatar: string;
    name: string;
    lastMessage: string;
    sendDate: string
    id: string
}

export const Companion: React.FC<CompanionPropsType> = ({
                                                            avatar,
                                                            name,
                                                            lastMessage,
                                                            sendDate,
                                                            id
                                                        }) => {

    let path = '/messenger/' + id

    return (
        <div className={style.Companion_Container}>
            <NavLink to={path} className={style.navLink}>
            <div className={style.avatar}>
                <img alt={'avatar'} src={avatar}/>
            </div>
            <div className={style.content}>
                <div className={style.topRow}>
                    <span className={style.name}>{name}</span>
                    <span className={style.date}>{sendDate}</span>
                </div>
                <div className={style.lowRow}>
                    <span>
                        {lastMessage}
                    </span>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

