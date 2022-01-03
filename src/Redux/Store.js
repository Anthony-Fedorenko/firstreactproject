import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        ],
        newMessageBody: ''
    },
    sidebar: {}

},
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store