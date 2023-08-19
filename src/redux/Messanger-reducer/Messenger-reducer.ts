import avatar1 from "../../Common/avatars/avatar1.avif";
import avatar2 from "../../Common/avatars/avatar2.avif";
import avatar3 from "../../Common/avatars/avatar3.jpg";

type ActionsType = | ReturnType<typeof addMessageAC>

const initialState: messengerType = {
    dialogs: [
        {
            name: 'Mister Bot',
            avatar: avatar1,
            lastMessage: 'Welcome!',
            sendDate: '13 Jul',
            id: 'dialog_1',
            isActive: false,
        },
        {
            name: 'Maksim Bigudinsky',
            avatar: avatar2,
            lastMessage: 'Are you ok?',
            sendDate: '11 Jul',
            id: 'dialog_2',
            isActive: false,
        },
        {
            name: 'Anastasya Gmyr',
            avatar: avatar3,
            lastMessage: 'ok',
            sendDate: '10 Jul',
            id: 'dialog_3',
            isActive: true,
        }
    ],
    messages: {
        'dialog_1': [
            {id: '1', time: '12:34', textMessage: 'Hi', myMessage: false},
            {id: '2', time: '12:35', textMessage: 'Hello my dear friends', myMessage: true},
        ],
        'dialog_2': [],
        'dialog_3': [
            {id: '4', time: '12:37', textMessage: 'today!!!', myMessage: true},
            {id: '3', time: '12:36', textMessage: 'when we will make our app?', myMessage: false},
            {id: '2', time: '12:35', textMessage: 'Hello my dear friends', myMessage: true},
            {id: '1', time: '12:34', textMessage: 'Hi', myMessage: false},
        ],
    }
}

export const messengerReducer = (state: messengerType = initialState, action: ActionsType): messengerType => {
    switch (action.type) {
        case "ADD_MESSAGE": {
            const newMessage: messagesType = {id: '1', time: '12:38', textMessage: action.message, myMessage: true}

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.idDialog]: [newMessage, ...state.messages[action.idDialog]]
                }

            }
        }
        default:
            return state
    }
}

//ACTIONS
export const addMessageAC = (message: string, idDialog: string) => {
    return {type: 'ADD_MESSAGE', message, idDialog} as const
}


//TYPES

export type messengerType = {
    dialogs: dialogsDateType[],
    messages: {
        [key: string]: messagesType[]
    }
}

export type dialogsDateType = {
    name: string,
    avatar: string,
    id: string,
    lastMessage: string,
    sendDate: string,
    isActive: boolean,
}
export type messagesType = {
    id: string,
    time: string,
    textMessage: string,
    myMessage: boolean,
}