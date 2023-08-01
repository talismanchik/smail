import React from 'react';
import style from '../../../Messanger.module.scss'

type MessagePropsType = {
    // avatar?: string,
    // name: string,
    time: string,
    textMessage: string,
    myMessage: boolean
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={props.myMessage? `${style.messageContainer} ${style.myMessageTrue}` : `${style.messageContainer} ${style.myMessageFalse}`}>
            <div className={style.textContent}>
                {props.textMessage}
                <span className={style.messageMeta}>{props.time}</span>
            </div>
        </div>
    );
};

