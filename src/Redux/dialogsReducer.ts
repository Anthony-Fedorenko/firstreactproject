const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Vitalii'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Yauhenii'},
        {id: 5, name: 'FE29'},
        {id: 6, name: 'MyLove'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are U'},
        {id: 3, message: 'Best wishes'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'How are U'},
        {id: 6, message: 'Best wishes'}
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer