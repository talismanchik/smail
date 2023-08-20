import {combineReducers, legacy_createStore} from "redux";
import {messengerReducer} from "./Messanger-reducer/Messenger-reducer";
import {profileReducer} from "./Profile-reducer/Profile-reducer";
import {usersReducer} from "./Users-reducer/Users-reduser";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profileDate: profileReducer,
    messengerDate: messengerReducer,
    users: usersReducer,
})
// непосредственно создаём store
export let store = legacy_createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;