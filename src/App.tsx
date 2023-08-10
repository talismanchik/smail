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
import {addPostAC, profileType} from "./redux/Profile-reducer";
import {addMessageAC, messengerType} from "./redux/MessengerReducer";


function App() {
    const posts = useSelector<AppRootStateType, postType[]>(state => state.profileDate.posts)
    const messengerDate = useSelector<AppRootStateType, messengerType>(state => state.messengerDate)
    const dispatch = useDispatch();
    // const [posts, setPosts] = useState<postType[]>(props.state.posts)
    // const [messages, setMessages] = useState(props.state.messages)
    const addPost = (textPost: string) => {
        dispatch(addPostAC(textPost))
        // const newPost: postType = {
        //     lastPost: true,
        //     name: 'Eugene Nesterenko',
        //     text: textPost,
        //     likes: 0,
        //     comments: 0,
        //     time: 'yesterday at 23:46'
        // }
        // const newPosts = posts.map(el => el.lastPost ? {...el, lastPost: false} : el)
        // setPosts([newPost, ...newPosts])
    }
    const addMessage = (message: string, IdDialog: string) => {
        dispatch(addMessageAC(message, IdDialog))
        // const newMessage: messagesType = {id: '5', time: '12:38', textMessage: message, myMessage: true}
        // setMessages([newMessage, ...messages])
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

