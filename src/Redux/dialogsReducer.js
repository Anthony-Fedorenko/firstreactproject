const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer