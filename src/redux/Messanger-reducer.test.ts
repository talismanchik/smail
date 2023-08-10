import {addMessageAC, messengerReducer, messengerType} from "./MessengerReducer";
import avatar1 from "../Common/avatars/avatar1.avif";
import avatar2 from "../Common/avatars/avatar2.avif";
import avatar3 from "../Common/avatars/avatar3.jpg";

let startState: messengerType = {
    dialogs: [
        {
            name: 'Mister Bot',
            avatar: avatar1,
            lastMessage: 'Welcome!',
            sendDate: '13 Jul',
            id: 'dialog_1',
            isActive: false
        },
        {
            name: 'Anastasya Gmyr',
            avatar: avatar3,
            lastMessage: 'ok',
            sendDate: '10 Jul',
            id: 'dialog_3',
            isActive:true,
        }
    ],
    messages: {
        'dialog_1': [
            {id: '1', time: '12:34', textMessage: 'Hi', myMessage: false},
            {id: '2', time: '12:35', textMessage: 'Hello my dear friends', myMessage: true},
        ],
        'dialog_3': [
            {id: '4', time: '12:37', textMessage: 'today!!!', myMessage: true},
            {id: '3', time: '12:36', textMessage: 'when we will make our app?', myMessage: false},
            {id: '2', time: '12:35', textMessage: 'Hello my dear friends', myMessage: true},
            {id: '1', time: '12:34', textMessage: 'Hi', myMessage: false},
        ],
    }
}
test('correct message should be added to correct array', () => {
    const action = addMessageAC('new message!!', 'dialog_3')
    const endState =  messengerReducer(startState, action)

    expect(endState.messages['dialog_3'].length).toBe(5)
    expect(endState.messages['dialog_3'][0].textMessage).toBe('new message!!')
    expect(endState.messages['dialog_3'][0].myMessage).toBe(true)

})