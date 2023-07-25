import React from 'react';
import style from './Messanger.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import {Companion} from "./Сompanion/Companion";
import avatar1 from '../../Common/avatars/avatar1.avif'
import avatar2 from '../../Common/avatars/avatar2.avif'
import avatar3 from '../../Common/avatars/avatar3.jpg'

type dialogsDateType = {
    name: string,
    avatar: string,
    id: string,
    lastMessage: string,
    sendDate: string,
}

export const Messenger = () => {

    const mapToCompanion = dialogsDate.map((el, key) =>
        <Companion key={key}
                   avatar={el.avatar}
                   name={el.name}
                   lastMessage={el.lastMessage}
                   sendDate={el.sendDate}
                   id={el.id}/>
    )
    return (
        <div className={style.messengerContainer}>
            <div className={style.dialogs}>
                <div className={style.searcher}>
                    <div className={style.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <input placeholder={'Search'}/>
                </div>
                <div className={style.chatList}>
                    {mapToCompanion}
                </div>
            </div>
            <div className={style.history_Container}>
                <div className={style.chatHeader}></div>
                <div className={style.chatBody}></div>
                <div className={style.chatInput}></div>
            </div>
        </div>
    );
};

const dialogsDate: dialogsDateType[] = [
    {
        name: 'Mister Bot',
        avatar: avatar1,
        lastMessage: 'Welcome!',
        sendDate: '12 Jul',
        id: '1',
    },
    {
        name: 'Maksim Bigudinsky',
        avatar: avatar2,
        lastMessage: 'Are you ok?',
        sendDate: '11 Jul',
        id: '2',
    },
    {
        name: 'MAnastasya Gmyr',
        avatar: avatar3,
        lastMessage: 'ok',
        sendDate: '10 Jul',
        id: '3',
    }
]
