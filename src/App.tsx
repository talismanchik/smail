import React, {useState} from 'react';
import style from './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";

function App() {

    return (
        <div className={style.appWrapper}>
            <div className={style.header}>
                <Header/>
            </div>
            <nav className={style.nav}>


                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={style.content}>
                <Profile/>
            </div>

        </div>
    )
}

export default App;
