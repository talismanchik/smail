import React from 'react';
import style from './Post.module.scss'
import ava from '../../../../../../../photo/IMG_20190901_215506_989.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

type PostPropsType = {
    lastPost: boolean;
    name: string;
    text: string;
    likes: number;
    comments: number;
    time: string;
}

export const Post: React.FC<PostPropsType> = ({
                                                  lastPost,
                                                  name,
                                                  text,
                                                  likes,
                                                  comments,
                                                  time
                                              }) => {

    return (
        <div className={`${style.postContainer} ${lastPost ? style.lastPost : 0}`}>
            <div className={style.postHeader}>
                <div className={style.postAvatar}>
                    <img
                        alt={'avatar'}
                        src={ava}
                    />
                </div>
                <div className={style.postHeaderInfo}>
                    <div className={style.postHeaderTitle}>{name}</div>
                    <div className={style.postHeaderSubtitle}>{time}</div>
                </div>
                <div className={style.postHeaderActions}>
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className={style.postContent}>
                <div className={style.postText}>{text}</div>
                <div className={style.postLikeWall}>
                    <div className={style.postLikeArea}>
                        <FavoriteBorderIcon
                            fontSize={"small"}
                            className={style.svg}
                        />
                        <span>
                            {likes}
                        </span>
                    </div>
                    <div className={style.postLikeArea}>
                        <ChatBubbleOutlineIcon
                            className={style.svg}
                            fontSize={"small"}
                        />
                        <span>
                            {comments}
                        </span>
                    </div>
                </div>
                <div className={style.postComments}></div>
            </div>
        </div>
    );
};

