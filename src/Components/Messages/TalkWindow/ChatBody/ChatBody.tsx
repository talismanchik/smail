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

            {/*<Message*/}
            {/*    // name={'Eugene Nesterenko'}*/}
            {/*    // avatar={avatar2}*/}
            {/*    time={'12:37'}*/}
            {/*    textMessage={'today!!!'}*/}
            {/*    myMessage={true}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    // name={'Anastasya Gmyr'}*/}
            {/*    // avatar={avatar1}*/}
            {/*    time={'12:36'}*/}
            {/*    textMessage={'when we will make our app?'}*/}
            {/*    myMessage={false}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    // name={'Eugene Nesterenko'}*/}
            {/*    // avatar={avatar2}*/}
            {/*    time={'12:35'}*/}
            {/*    textMessage={'Hello my dear friends'}*/}
            {/*    myMessage={true}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    // name={'Anastasya Gmyr'}*/}
            {/*    // avatar={avatar1}*/}
            {/*    time={'12:34'}*/}
            {/*    textMessage={'Hi'}*/}
            {/*    myMessage={false}*/}
            {/*/>*/}

        </div>
    );
};

