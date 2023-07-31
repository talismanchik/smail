import React from 'react';
import style from "../Messanger.module.scss";
import {ChatHeader} from "./TalkWindowComponent/ChatHeader";
import {ChatBody} from "./TalkWindowComponent/ChatBody";
import {ChatInput} from "./TalkWindowComponent/ChatInput";

export const TalkWindow = () => {
    return (
        <div className={style.history_Container}>
            <ChatHeader/>
            <ChatBody/>
            <ChatInput/>
        </div>
    );
};

