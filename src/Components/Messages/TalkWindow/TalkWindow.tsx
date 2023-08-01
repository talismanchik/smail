import React from 'react';
import style from "../Messanger.module.scss";
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatBody} from "./ChatBody/ChatBody";
import {ChatInput} from "./ChatInput/ChatInput";

export const TalkWindow = () => {
    return (
        <div className={style.history_Container}>
            <ChatHeader/>
            <ChatBody/>
            <ChatInput/>
        </div>
    );
};

