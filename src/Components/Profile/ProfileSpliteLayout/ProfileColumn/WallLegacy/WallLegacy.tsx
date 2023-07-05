import React from 'react';
import {SubmitPost} from "./SubmitPost/SubmitPost";
import {WallModule} from "./WallModule/WallModule";
import style from './WallLegacy.module.scss'

export const WallLegacy = () => {
    return (
        <div className={style.wallLegacyContainer}>
            <SubmitPost/>
            <div className={style.airHidden}></div>
            <WallModule/>
        </div>
    );
};

