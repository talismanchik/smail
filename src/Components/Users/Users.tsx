import React from 'react';
import {usersStateType} from "../../redux/Users-reducer/Users-reduser";
import style from './Users.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import {User} from "./User/User";

type UsersPropsType = {
    users: usersStateType
    changeFollowFriend: (id: string, followed: boolean)=>void
}

export const Users = (props: UsersPropsType) => {

    const userMapped = props.users.users.map((el, key) => {
        return <User key={key}
                     id={el.id}
                     status={el.status}
                     avatar={el.avatar}
                     followed={el.followed}
                     fullName={el.fullName}
                     location={el.location}
                     changeFollowFriend={props.changeFollowFriend}
        />
    })

    return (
        <div className={style.UsersContainer}>
            <div className={style.wideColumn}>
                <div className={style.friendsTubs}>
                    <div className={style.yourFriends}>
                        <button className={style.button}>Your friends</button>
                    </div>
                    <div className={style.findFriends}>
                        <button className={style.isActive}>Find friends</button>
                    </div>
                </div>
                <div className={style.friendsSearchInputContainer}>
                    <div className={style.friendsSearchInput}>
                        <input className={style.searchInput}
                               placeholder={'Search for friends'}></input>
                        <div className={style.searchButton}>
                            <SearchIcon fontSize={"small"}/>
                        </div>
                    </div>
                </div>
                <div className={style.friendsList}>
                    {userMapped}
                </div>
            </div>
            <div className={style.narrowColumn}>
                <div className={style.possibleFriends}>
                    <div className={style.headerModule}></div>
                    <div className={style.possibleFriendsList}></div>
                    <div className={style.ShowAll}></div>
                </div>
            </div>
        </div>
    );
};

