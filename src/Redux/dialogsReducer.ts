import {InferActionsTypes} from "./reduxStore";

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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            }
        default:
            return state
    }
}

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>