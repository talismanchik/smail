import React from 'react';
import style from "./Navbar.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.LeftMenuItem}>
                <a className={style.LeftMenuItem_Label}>
                    <AccountCircleOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>My page</span>
                </a>
            </div>
            <div className={style.LeftMenuItem}>
                <a className={style.LeftMenuItem_Label}>
                    <ChatBubbleOutlineOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>Messenger</span></a>
            </div>
            <div className={style.LeftMenuItem}>
                <a className={style.LeftMenuItem_Label}>
                    <NewspaperOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>News</span>
                </a>
            </div>
            <div className={style.LeftMenuItem}>
                <a className={style.LeftMenuItem_Label}>
                    <LibraryMusicOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>Music</span>
                </a>
            </div>
            <div className={style.LeftMenuItem}>
                <a className={style.LeftMenuItem_Label}>
                    <SettingsOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>Settings</span>
                </a>
            </div>
        </nav>
    );
};

