import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../Api/Api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../Api/AuthApi";
import {securityAPI} from "../Api/SecurityApi";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null //if null captcha is not required
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
        case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/AUTH/SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let MeData = await authAPI.me()
    if (MeData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = MeData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {  // captcha string???
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {

    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}


export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
