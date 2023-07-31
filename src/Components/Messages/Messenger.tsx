import React from 'react';
import style from './Messanger.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import {Companion} from "./Сompanion/Companion";
import {TalkWindow} from "./TalkWindow/TalkWindow";
import {dialogsDateType} from "../../redux/state";

type dialogsPropsType = {
    dialogs: dialogsDateType[]
}

export const Messenger = (props: dialogsPropsType) => {

    const mapToCompanion = props.dialogs.map((el, key) =>
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
            <TalkWindow/>
        </div>
    );
};


