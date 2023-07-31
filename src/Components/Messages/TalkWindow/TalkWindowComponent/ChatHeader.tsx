import React from 'react';
import style from "../../Messanger.module.scss";
import avatar from '../../../../Common/avatars/avatar3.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const ChatHeader = () => {
    return (
        <div className={style.chatHeader}>
            <div className={style.chatHeaderTitle}>Anastasya Gmyr</div>
            <div className={style.chatHeaderAside}>
                <div className={style.MoreHorizIcon}>
                    <MoreHorizIcon/>
                </div>
                <div className={style.headerAvatar}>
                    <img alt={'avatar'} src={avatar}/>
                </div>

            </div>
        </div>
    );
};

