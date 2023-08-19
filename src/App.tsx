import React from 'react';
import style from './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Messenger} from "./Components/Messages/Messenger";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {addPostAC} from "./redux/Profile-reducer/Profile-reducer";
import {addMessageAC, messengerType} from "./redux/Messanger-reducer/Messenger-reducer";
import {Users} from "./Components/Users/Users";


function App() {
    const posts = useSelector<AppRootStateType, postType[]>(state => state.profileDate.posts)
    const messengerDate = useSelector<AppRootStateType, messengerType>(state => state.messengerDate)
    const dispatch = useDispatch();

    const addPost = (textPost: string) => {
        dispatch(addPostAC(textPost))
    }
    const addMessage = (message: string, IdDialog: string) => {
        dispatch(addMessageAC(message, IdDialog))
       }


    return (
        <div className={style.appWrapper}>
            <div className={style.header}>
                <Header/>
            </div>
            <Navbar/>
            <div className={style.content}>
                <Routes>
                    <Route path={'/'} element={<Profile posts={posts} addPost={addPost}/>}/>
                    <Route path='/profile'
                           element={<Profile posts={posts} addPost={addPost}/>}/>
                    <Route path='/messenger'
                           element={<Messenger messengerDate={messengerDate}
                                               addMessage={addMessage}
                           />}/>
                    <Route path={'/messenger/:id'}
                           element={<Messenger messengerDate={messengerDate}
                                               addMessage={addMessage}
                           />}/>
                    <Route path='/users'
                           element={<Users/>}/>
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
    )
}

export default App;

export type postType = {
    lastPost: boolean,
    name: string,
    text: string,
    likes: number,
    comments: number,
    time: string
}

