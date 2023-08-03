import React, {ChangeEvent, useState} from 'react';
import style from "../Messanger.module.scss";
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatBody} from "./ChatBody/ChatBody";
import {ChatInput} from "./ChatInput/ChatInput";
import {messagesType} from "../../../redux/state";

type TalkWindowPropsType = {
    messages: messagesType[],
    addMessage: (message: string) => void
}

export const TalkWindow = (props: TalkWindowPropsType) => {
    const [textMessage, setTextMessage] = useState('')

    const setTextMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextMessage(e.currentTarget.value)
    }
    const addMessage=()=>{
        props.addMessage(textMessage)
        setTextMessage('')
    }

    return (
        <div className={style.history_Container}>
            <ChatHeader/>
            <ChatBody messages={props.messages}/>
            <ChatInput addMessage={addMessage}
                       textInput={textMessage}
                       setTextMessageHandler={setTextMessageHandler}
            />
        </div>
    );
};

