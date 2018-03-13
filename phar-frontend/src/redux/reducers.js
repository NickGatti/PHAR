import { LOGIN_SUCCESSFUL, LOGIN_FAILED } from './actions'

let initialState = {
    user: {},
    isLoggedIn: false,
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESSFUL:
            return {
                user: payload.data.user,
                isLoggedIn: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                user: {},
                isLoggedIn: false,
            }
        default:
            return state
    }
}