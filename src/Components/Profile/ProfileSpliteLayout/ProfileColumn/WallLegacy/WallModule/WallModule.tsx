import React from 'react';
import style from './WallModule.module.scss'
import {Post} from "./Post/Post";

export const WallModule = () => {
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
                <Post lastPost={true}
                      name={'Eugene Nesterenko'}
                      text={'This is last post'}
                      likes={0}
                      comments={0}
                      time={'yesterday at 17:26'}
                />
                <Post lastPost={false}
                      name={'Eugene Nesterenko'}
                      text={'Hello World!'}
                      likes={15}
                      comments={1}
                      time={'yesterday at 16:22'}
                />
                {/*<div className={style.wallEmpty}>*/}
                {/*    There are no posts on the wall yet*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

