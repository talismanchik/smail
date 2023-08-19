import {followAC, setUsersAC, unfollowAC, usersReducer, usersStateType, userType} from "./Users-reduser";

const startState: usersStateType = {
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

test('"followed" should bo "true" for a valid message', ()=>{
    const action = followAC('2')
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(3)
    expect(endState.users[1].followed).toBe(true)
    expect(endState.users[2].followed).toBe(true)
})

test('"followed" should bo "false" for a valid message', ()=>{
    const action = unfollowAC('1')
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(3)
    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[0].followed).toBe(false)
})

test('the required number of users has been added to the array', ()=>{
const newUsers: userType[] = [
    {
        id: '4',
        followed: true,
        fullName: 'Dmitry Razin',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
    },
    {
        id: '5',
        followed: false,
        fullName: 'Sergey Pazhytnov',
        status: 'I am a boss too',
        location: {city: 'Moscow', country: 'Russia'}
    },
    {
        id: '6',
        followed: true,
        fullName: 'Elena Mihalckovich',
        status: 'I am not a boss',
        location: {city: 'Kiev', country: 'Ukraine'}
    },
]
    const action = setUsersAC(newUsers)
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(6)
    expect(endState.users[4].id).toBe('5')
})