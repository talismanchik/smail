import React from 'react';
import style from "../Users.module.scss";

type UserPropsType = {
    id: string,
    avatar: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }

    changeFollowFriend: (id: string, followed: boolean)=>void
}

export const User = (props: UserPropsType) => {

    const changeFollowFriendHandler = ()=>{
        props.changeFollowFriend(props.id, props.followed)
    }

    return (
        <div className={style.friendContainer}>
            <div className={style.friendInfo}>
                <div className={style.avatarWrapper}>
                    <div className={style.avatar}>
                        <img alt={'avatar'} src={props.avatar}/>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.fullName}>
                        {props.fullName}
                    </div>
                    <div className={style.status}>
                        {props.status}
                    </div>
                    <div className={style.toMessage}>
                        to write a message
                    </div>
                </div>
            </div>
            <div className={style.actionsButton}>
                <button onClick={changeFollowFriendHandler}
                    className={`${style.actionsButton} ${props.followed? style.unfollow: style.follow}`}>
                    <span>{props.followed
                    ? 'Unfollow'
                    : 'Follow'}</span>
                </button>
            </div>
        </div>
    );
};

