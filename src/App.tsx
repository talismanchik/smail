import React from 'react';
import style from './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Messenger} from "./Components/Messages/Messenger";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";

function App() {

    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <div className={style.header}>
                    <Header/>
                </div>
                <Navbar/>
                <div className={style.content}>
                    <Routes>
                        <Route path={'/'} element={<Profile/>}/>
                        <Route path='/profile'
                               element={<Profile/>}/>
                        <Route path='/messenger'
                               element={<Messenger/>}/>
                        <Route path={'/messenger/:id'}
                               element={<Messenger/>}/>
                        <Route path='/news'
                               element={<News/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                        <Route path='*' element={<h1>404: PAGE NOT FOUND</h1>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
