import {rerenderEntireTree} from "../Render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are U', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 25}
        ],
        newPostText: 'Antonio-coder'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Vitalii'},
            {id: 3, name: 'Nikita'},
            {id: 4, name: 'Yauhenii'},
            {id: 5, name: 'FE29'},
            {id: 6, name: 'MyLove'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are U'},
            {id: 3, message: 'Best wishes'},
            {id: 4, message: 'Hi'},
            {id: 5, message: 'How are U'},
            {id: 6, message: 'Best wishes'}
        ]
    },
    sidebar: {}

}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state