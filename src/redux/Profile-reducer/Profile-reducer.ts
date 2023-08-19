type AddPostAT = {
    type: 'ADD_POST',
    textPost: string,
}

type ActionsType = AddPostAT

const initialState: profileType = {
    posts: [ {
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
        }]
}

export const profileReducer = (state: profileType = initialState, action: ActionsType): profileType => {
    switch (action.type) {
        case "ADD_POST": {
            const newPost: postType = {
                lastPost: true,
                name: 'Eugene Nesterenko',
                text: action.textPost,
                likes: 0,
                comments: 0,
                time: 'yesterday at 23:46'
            }
            const newPosts = state.posts.map(el => el.lastPost ? {...el, lastPost: false} : el)
            return {...newPosts, posts: [newPost, ...newPosts]}
        }
        default:
            return state
    }
}

//AC
export const addPostAC = (textPost: string): AddPostAT => {
    return {type: "ADD_POST", textPost}
}

// TYPES
type postType = {
    lastPost: boolean,
    name: string,
    text: string,
    likes: number,
    comments: number,
    time: string
}
export type profileType = {
    posts: postType[]
}
