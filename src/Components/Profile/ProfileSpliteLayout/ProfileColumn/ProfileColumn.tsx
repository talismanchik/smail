import React from 'react';
import style from "./ProfileColumn.module.scss";
import {SubmitPost} from "./SubmitPost/SubmitPost";
import {WallModule} from "./WallModule/WallModule";
import {postType} from "../../../../App";

type WallModulePropsType = {
    posts: postType[]
    addPost: (textPost: string)=>void
}

export const ProfileColumn = (props: WallModulePropsType) => {
    return (
        <div>
            <div className={style.profileColumnContainer}>
                <SubmitPost addPost={props.addPost}/>
                <div className={style.airHidden}></div>
                <WallModule posts={props.posts}/>
            </div>
        </div>
    );
};

