import React from 'react';
import style from "../../Messanger.module.scss";
import {Message} from "./Message/Message";
import {messagesType} from "../../../../redux/state";


type ChatBodyPropsType = {
    messages: messagesType[],
}


export const ChatBody = (props: ChatBodyPropsType) => {
    const mapToMessages = props.messages.map((el, index) =>
    <Message key={index} id={el.id} time={el.time} textMessage={el.textMessage} myMessage={el.myMessage}/>
    )
    return (
        <div className={style.chatBody}>
            {mapToMessages}
        </div>
    );
};

