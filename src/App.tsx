import React, {useState} from 'react';
import style from './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Messenger} from "./Components/Messages/Messenger";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {dialogsDateType, messagesType} from "./redux/state";
import {elGR} from "@mui/material/locale";

type AppPropsType = {
    state: {
        posts: postType[],
        dialogs: dialogsDateType[],
        messages: messagesType[],
    }
}

function App(props: AppPropsType) {

    const [posts, setPosts] = useState<postType[]>(props.state.posts)

    const addPost = (textPost: string) => {
        const newPost: postType = {
            lastPost: true,
            name: 'Eugene Nesterenko',
            text: textPost,
            likes: 0,
            comments: 0,
            time: 'yesterday at 23:46'
        }
        const newPosts = posts.map(el => el.lastPost ? {...el, lastPost: false} : el)
        setPosts([newPost, ...newPosts])
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
                           element={<Messenger dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
                    <Route path={'/messenger/:id'}
                           element={<Messenger dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
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

// посты для основной страницы
const postsArray = [
    {
        lastPost: true,
        name: 'Eugene Nesterenko',
        text: 'This is last post',
        likes: 0,
        comments: 0,
        time: 'yesterday at 17:26',
    },
    {
        lastPost: false,
        name: 'Eugene Nesterenko',
        text: 'Hello World!',
        likes: 16,
        comments: 1,
        time: 'yesterday at 12:34',
    }
]
export type postType = {
    lastPost: boolean,
    name: string,
    text: string,
    likes: number,
    comments: number,
    time: string
}

