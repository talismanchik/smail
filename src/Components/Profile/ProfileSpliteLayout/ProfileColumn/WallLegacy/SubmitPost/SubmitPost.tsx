import React from 'react';
import ava from '../../../../../../photo/IMG_20190901_215506_989.jpg'
import style from './SubmitPost.module.scss'

export const SubmitPost = () => {
    return (
        <div className={style.submitPostContainer}>
            <div className={style.inputLine}>
                <div className={style.submitPostAva}>
                    <a>
                        <img alt={'avatar'}
                             src={ava}/>
                    </a>
                </div>
                <div className={style.inputPost}>
                    <input placeholder={'Anything new?'}></input>
                </div>
            </div>
            <div className={style.publishLine}>
                <button className={style.publishPost}>Publish</button>
            </div>
        </div>
    );
};

