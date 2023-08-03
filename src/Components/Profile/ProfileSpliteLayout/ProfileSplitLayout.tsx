import React from 'react';
import {ProfileColumn} from "./ProfileColumn/ProfileColumn";
import {ScrollWrapper} from "./ScrollWrapper/ScrollWrapper";
import {postType} from "../../../App";

type WallModulePropsType = {
    posts: postType[]
    addPost: (textPost: string)=>void
}

export const ProfileSplitLayout = (props: WallModulePropsType) => {
    return (
        <div>
            <ProfileColumn posts={props.posts} addPost={props.addPost}/>
            <ScrollWrapper/>
        </div>
    );
};

