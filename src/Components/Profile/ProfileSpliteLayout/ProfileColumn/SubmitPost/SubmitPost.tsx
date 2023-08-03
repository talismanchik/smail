import React, {ChangeEvent, useState} from 'react';
import ava from '../../../../../photo/IMG_20190901_215506_989.jpg'
import style from './SubmitPost.module.scss'

type SubmitPostPropsType = {
    addPost: (textPost: string)=>void
}

export const SubmitPost = (props: SubmitPostPropsType) => {

    const [textPost, setTextPost] = useState('')

    const setText = (e: ChangeEvent<HTMLInputElement>) => {
        setTextPost(e.currentTarget.value)
    }

    const addPost = () => {
        props.addPost(textPost)
        setTextPost('')
    }

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
                    <input placeholder={'Anything new?'} onChange={setText} value={textPost}></input>
                </div>
            </div>
            <div className={style.publishLine}>
                <button onClick={addPost} className={style.publishPost}>Publish</button>
            </div>
        </div>
    );
};

