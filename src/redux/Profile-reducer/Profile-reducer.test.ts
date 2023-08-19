import {addPostAC, profileReducer, profileType} from "./Profile-reducer";

let startState: profileType = {
    posts: [
        {
            lastPost: true,
            name: 'Eugene Nesterenko',
            text: 'This is last post',
            likes: 0,
            comments: 0,
            time: 'yesterday at 23:45',
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
}

test('correct post should be added to correct array', ()=>{
    const action = addPostAC('new post for test')
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3);
    expect(endState.posts[0].text).toBe('new post for test');
    expect(endState.posts[0].lastPost).toBe(true);
    expect(endState.posts[1].lastPost).toBe(false);

})