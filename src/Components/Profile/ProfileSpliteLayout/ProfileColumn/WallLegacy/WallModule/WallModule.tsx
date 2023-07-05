import React from 'react';
import style from './WallModule.module.scss'

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
                There are no posts on the wall yet
            </div>
        </div>
    );
};

