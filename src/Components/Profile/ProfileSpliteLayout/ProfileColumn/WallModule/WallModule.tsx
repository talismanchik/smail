import React from 'react';
import style from './WallModule.module.scss'
import {Post} from "./Post/Post";
import {postType} from "../../../../../App";

type WallModulePropsType = {
    posts: postType[]
}


export const WallModule = (props: WallModulePropsType) => {

    const postDisplay = props.posts.map((el, index)=>
        <Post lastPost={el.lastPost}
              name={el.name}
              text={el.text}
              likes={el.likes}
              comments={el.comments}
              time={el.time}
        />
    )

    return (
        <div className={style.wallModuleContainer}>
            <div className={style.wallModuleHeader}>
                <div className={style.wallHeaderMenu}>
                    <div className={`${style.wallAllEntries} ${style.wallTabAll}`}>
                        All entries
                    </div>
                    <div className={`${style.wallMyNotes} ${style.wallTabAll}`}>
                        My notes
                    </div>
                </div>
                <div className={style.wallSearchEngine}>

                </div>
            </div>
            <div className={style.wallModulePosts}>
                {postDisplay}
                {/*<div className={style.wallEmpty}>*/}
                {/*    There are no posts on the wall yet*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

