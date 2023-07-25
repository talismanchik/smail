import React from 'react';
import style from './Profile.module.scss'
import ava from '../../photo/IMG_20190901_215506_989.jpg'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfileSplitLayout} from "./ProfileSpliteLayout/ProfileSplitLayout";

export const Profile = () => {
    return (
        <div className={style.profileContainer}>
            <ProfileHeader/>
            <div className={style.airHidden}></div>
            <ProfileSplitLayout/>
        </div>
    );
};

