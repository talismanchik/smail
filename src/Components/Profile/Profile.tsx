import React from 'react';
import style from './Profile.module.scss'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfileSplitLayout} from "./ProfileSpliteLayout/ProfileSplitLayout";
import {postType} from "../../App";

type WallModulePropsType = {
    posts: postType[],
    addPost: (textPost: string)=>void
}

export const Profile = (props: WallModulePropsType) => {
    return (
        <div className={style.profileContainer}>
            <ProfileHeader/>
            <div className={style.airHidden}></div>
            <ProfileSplitLayout posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

