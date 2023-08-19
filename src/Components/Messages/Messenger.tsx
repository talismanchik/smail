import React from 'react';
import style from './Messanger.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import {Companion} from "./Сompanion/Companion";
import {TalkWindow} from "./TalkWindow/TalkWindow";
import {dialogsDateType, messagesType} from "../../redux/state";
import {messengerType} from "../../redux/Messanger-reducer/Messenger-reducer";

type dialogsPropsType = {
    messengerDate: messengerType
    addMessage: (message: string, IdDialog:string) => void

}

export const Messenger = (props: dialogsPropsType) => {

    const mapToCompanion = props.messengerDate.dialogs.map((el, key) =>
        <Companion key={key}
                   avatar={el.avatar}
                   name={el.name}
                   lastMessage={el.lastMessage}
                   sendDate={el.sendDate}
                   id={el.id}/>
    )

    const talkWindow = props.messengerDate.dialogs.find(el=>el.isActive)



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
            {talkWindow
                ? <TalkWindow messages={props.messengerDate.messages[talkWindow.id]} addMessage={props.addMessage} idDialog={talkWindow.id}/>
                : <div></div>
            }
        </div>
    );
};


