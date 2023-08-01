import React from 'react';
import style from "../../Messanger.module.scss";
import {Message} from "./Message/Message";
import avatar1 from '../../../../Common/avatars/avatar3.jpg'
import avatar2 from '../../../../photo/IMG_20190901_215506_989.jpg'


export const ChatBody = () => {
    return (
        <div className={style.chatBody}>

            <Message
                // name={'Anastasya Gmyr'}
                // avatar={avatar1}
                time={'12:34'}
                textMessage={'Hi'}
                myMessage={false}
            />
            <Message
                // name={'Eugene Nesterenko'}
                // avatar={avatar2}
                time={'12:35'}
                textMessage={'Hello my dear friends'}
                myMessage={true}
            />
            <Message
                // name={'Anastasya Gmyr'}
                // avatar={avatar1}
                time={'12:36'}
                textMessage={'when we will make our app?'}
                myMessage={false}
            />
            <Message
                // name={'Eugene Nesterenko'}
                // avatar={avatar2}
                time={'12:37'}
                textMessage={'today!!!'}
                myMessage={true}
            />

        </div>
    );
};

