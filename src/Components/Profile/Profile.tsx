import React from 'react';
import style from './Profile.module.scss'
import ava from '../../photo/IMG_20190901_215506_989.jpg'

export const Profile = () => {
    return (
        <div className={style.profileContainer}>
            <div className={style.profileHeader}>
                <div className={style.ownerPageCover}>

                </div>
                <div className={style.profileMain}>
                    <div className={style.profileMainAva}>
                        <img
                            alt={'avatar'}
                            src={ava}
                        />
                    </div>
                    <div className={style.profileMainWrapper}>
                        <div className={style.profileMainInfo}>
                            <div className={style.profileOwnerName}>
                                <h2>Eugene Nesterenko</h2>
                            </div>
                            <div className={style.profileOwnerInfo}>
                                <div>Jhodino</div>
                                <div>BSU</div>
                                <div>more</div>
                            </div>
                        </div>
                        <div className={style.profileMainActions}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

