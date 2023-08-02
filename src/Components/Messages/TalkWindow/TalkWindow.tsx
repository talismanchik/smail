import React from 'react';
import style from "../Messanger.module.scss";
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatBody} from "./ChatBody/ChatBody";
import {ChatInput} from "./ChatInput/ChatInput";
import {messagesType} from "../../../redux/state";

type TalkWindowPropsType = {
    messages: messagesType[],
}

export const TalkWindow = (props: TalkWindowPropsType) => {
    return (
        <div className={style.history_Container}>
            <ChatHeader/>
            <ChatBody messages={props.messages}/>
            <ChatInput/>
        </div>
    );
};

