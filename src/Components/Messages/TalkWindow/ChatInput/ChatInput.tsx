import React from 'react';
import style from "../../Messanger.module.scss";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const ChatInput = () => {
    return (
        <div className={style.chatInput}>
            <div className={style.chatInputAttach}>
                <AttachFileIcon/>
            </div>
            <div className={style.chatInputTextArea}>
                {/*<TextareaAutosize/>*/}
                <textarea  placeholder={'Write a message...'}/>
            </div>
            <div className={style.chatInputSend}>
                <SendIcon/>
            </div>
        </div>
    );
};

