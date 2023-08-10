import avatar1 from "../Common/avatars/avatar1.avif";
import avatar2 from "../Common/avatars/avatar2.avif";
import avatar3 from "../Common/avatars/avatar3.jpg";

type stateType = {
    posts: postType[],
    dialogs: dialogsDateType[],
    messages: messagesType[],
}
//
// export const state: stateType = {
//     posts: [
//         {
//             lastPost: true,
//             name: 'Eugene Nesterenko',
//             text: 'This is last post',
//             likes: 0,
//             comments: 0,
//             time: 'yesterday at 23:45',
//         },
//         {
//             lastPost: false,
//             name: 'Eugene Nesterenko',
//             text: 'Hello World!',
//             likes: 16,
//             comments: 1,
//             time: 'yesterday at 12:34',
//         }
//     ],
//     dialogs: [
//         {
//             name: 'Mister Bot',
//             avatar: avatar1,
//             lastMessage: 'Welcome!',
//             sendDate: '13 Jul',
//             id: '1',
//         },
//         {
//             name: 'Maksim Bigudinsky',
//             avatar: avatar2,
//             lastMessage: 'Are you ok?',
//             sendDate: '11 Jul',
//             id: '2',
//         },
//         {
//             name: 'Anastasya Gmyr',
//             avatar: avatar3,
//             lastMessage: 'ok',
//             sendDate: '10 Jul',
//             id: '3',
//         }
//     ],
//     messages: [
//         {id: '4', time: '12:37', textMessage: 'today!!!', myMessage: true},
//         {id: '3', time: '12:36', textMessage: 'when we will make our app?', myMessage: false},
//         {id: '2', time: '12:35', textMessage: 'Hello my dear friends', myMessage: true},
//         {id: '1', time: '12:34', textMessage: 'Hi', myMessage: false},
//     ],
// }

// TYPES
export type postType = {
    lastPost: boolean,
    name: string,
    text: string,
    likes: number,
    comments: number,
    time: string
}
export type dialogsDateType = {
    name: string,
    avatar: string,
    id: string,
    lastMessage: string,
    sendDate: string,
}
export type messagesType = {
    id: string,
    time: string,
    textMessage: string,
    myMessage: boolean,
}