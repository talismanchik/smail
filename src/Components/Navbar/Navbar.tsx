import React from 'react';
import style from "./Navbar.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.LeftMenuItem}>
                <NavLink to={'/profile'}
                    className={style.LeftMenuItem_Label}>
                    <AccountCircleOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>My page</span>
                </NavLink>
            </div>
            <div className={style.LeftMenuItem}>
                <NavLink to={'/messenger'}
                    className={style.LeftMenuItem_Label}>
                    <ChatBubbleOutlineOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>Messenger</span></NavLink>
            </div>
            <div className={style.LeftMenuItem}>
                <NavLink to={'/news'}
                    className={style.LeftMenuItem_Label}>
                    <NewspaperOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>News</span>
                </NavLink>
            </div>
            <div className={style.LeftMenuItem}>
                <NavLink to={'/music'}
                    className={style.LeftMenuItem_Label}>
                    <LibraryMusicOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>Music</span>
                </NavLink>
            </div>
            <div className={style.LeftMenuItem}>
                <NavLink
                    to={'/settings'}className={style.LeftMenuItem_Label}>
                    <SettingsOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    );
};

