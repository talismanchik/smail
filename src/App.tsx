import React from 'react';
import style from './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";

function App() {

    return (
        <div className={style.appWrapper}>
            <div className={style.header}>
                <Header/>
            </div>
            <Navbar/>
            <div className={style.content}>
                <Profile/>
            </div>
        </div>
    )
}

export default App;
