import React, {ChangeEvent, useState} from 'react';
import style from "../../Messanger.module.scss";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

type ChatInputPropsType = {
    addMessage: () => void
    textInput: string
    setTextMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

export const ChatInput = (props: ChatInputPropsType) => {

    // const setTextMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setTextMessage(e.currentTarget.value)
    // }



    return (
        <div className={style.chatInput}>
            <div className={style.chatInputAttach}>
                <AttachFileIcon/>
            </div>
            <div className={style.chatInputTextArea}>
                {/*<TextareaAutosize/>*/}
                <textarea
                    placeholder={'Write a message...'}
                    value={props.textInput}
                    onChange={props.setTextMessageHandler}
                />
            </div>
            <div className={style.chatInputSend}>
                <SendIcon onClick={props.addMessage}/>
            </div>
        </div>
    );
};

