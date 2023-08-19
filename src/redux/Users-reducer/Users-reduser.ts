const initialState: stateType = {
    users: [
        {
            id: '1',
            followed: true,
            fullName: 'Dmitry Razin',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '2',
            followed: false,
            fullName: 'Sergey Pazhytnov',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: '3',
            followed: true,
            fullName: 'Elena Mihalckovich',
            status: 'I am not a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

export const usersReducer = (state: stateType = initialState, action: ActionType): stateType => {
    switch (action.type) {
        case 'FOLLOW':{
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: true} : el)}
        }
        case "UNFOLLOW":{
            return {...state, users: state.users.map(el=> el.id === action.userID? {...el, followed: false} : el)}
        }
        case "SET_USERS":{
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state
    }
}

//ACTIONS
export const followAC = (userID: string) => ({type: 'FOLLOW', userID}) as const
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', userID}) as const
export const setUsersAC = (users: userType) => ({type: 'SET_USERS', users}) as const

//TYPES

type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

type stateType = {
    users: userType[]
}
type userType = {
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {city: string, country: string}
}
