let store = {
    _state: {
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

},
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store