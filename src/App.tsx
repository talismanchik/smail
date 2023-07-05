import React from 'react';
import style from './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function App() {

    return (
        <div className={style.appWrapper}>
            <div className={style.header}>
                <Header/>
            </div>
            <nav className={style.nav}>
                <div className={style.LeftMenuItem}>
                    <AccountCircleOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <a className={style.LeftMenuItem_Label}>My page</a>
                </div>
                <div className={style.LeftMenuItem}>
                    <ChatBubbleOutlineOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <a className={style.LeftMenuItem_Label}>Messenger</a>
                </div>
                <div className={style.LeftMenuItem}>
                    <NewspaperOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <a className={style.LeftMenuItem_Label}>News</a>
                </div>
                <div className={style.LeftMenuItem}>
                    <LibraryMusicOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <a className={style.LeftMenuItem_Label}>Music</a>
                </div>
                <div className={style.LeftMenuItem}>
                    <SettingsOutlinedIcon
                        fontSize='small'
                        className={style.LeftMenuItem_Icon}/>
                    <a className={style.LeftMenuItem_Label}>Settings</a>
                </div>
            </nav>
            <div className={style.content}>
                <Profile/>
            </div>
        </div>
    )
}

export default App;
