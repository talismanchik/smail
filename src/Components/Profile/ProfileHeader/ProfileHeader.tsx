import React from 'react';
import style from "./ProfileHeader.module.scss";
import ava from "../../../photo/IMG_20190901_215506_989.jpg";

export const ProfileHeader = () => {
    return (
        <div className={style.profileHeader}>
            <div className={style.ownerPageCover}>

            </div>
            <div className={style.profileMain}>
                <div className={style.profileMainAvaWrapper}>
                    <div className={style.profileMainAva}>
                        <img
                            alt={'avatar'}
                            src={ava}
                        />
                    </div>
                </div>
                <div className={style.profileMainWrapper}>
                    <div className={style.profileMainWrapper_In}>
                        <div className={style.profileMainInfo}>
                            <div className={style.profileOwnerName}>
                                <h2>Eugene Nesterenko</h2>
                            </div>
                            <div className={style.profileOwnerInfo}>
                                <div>Zhodino</div>
                                <div>BSU</div>
                                <div>More</div>
                            </div>
                        </div>
                        <div className={style.profileMainActionsWrapper}>
                            <div className={style.profileMainActions}>
                                <div className={style.profileActionsButton}>
                                    <a>
                                        <span>Edit profile</span>
                                    </a>
                                </div>
                                <div className={style.profileActionsButton}>
                                    <a>
                                        <span>More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

