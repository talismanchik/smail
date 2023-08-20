import avatar3 from "../../Common/avatars/avatar3.jpg";
import avatar2 from "../../Common/avatars/avatar2.avif";
import avatar4 from "../../Common/avatars/avatar4.jpg";
import avatar6 from "../../Common/avatars/avatar6.jpg";


const initialState: usersStateType = {
    users: [
        {
            id: '1',
            avatar: avatar3,
            followed: true,
            fullName: 'Dmitry Razin',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '2',
            avatar: avatar4,
            followed: false,
            fullName: 'Sergey Pazhytnov',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: '3',
            avatar: avatar2,
            followed: true,
            fullName: 'Elena Mihalckovich',
            status: 'I am not a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: '4',
            avatar: avatar6,
            followed: true,
            fullName: 'Viktor Polozhin',
            status: 'I am not a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

export const usersReducer = (state: usersStateType = initialState, action: ActionType): usersStateType => {
    switch (action.type) {
        case 'FOLLOW':{
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: true} : el)}
        }
        case "UNFOLLOW":{
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: false} : el)}
        }
        case "SET_USERS":{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

//ACTIONS
export const followAC = (userID: string) => ({type: 'FOLLOW', userID}) as const
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', userID}) as const
export const setUsersAC = (users: userType[]) => ({type: 'SET_USERS', users}) as const

//TYPES

type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export type usersStateType = {
    users: userType[]
}
export type userType = {
    id: string,
    avatar: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {city: string, country: string}
}
