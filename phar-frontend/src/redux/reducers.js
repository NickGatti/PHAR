import { 
    LOGIN_SUCCESSFUL, 
    LOGIN_FAILED, 
    FETCH_ADOPTIONS_SUCCESS,
    FETCH_ADOPTIONS_FAILURE
 } from './actions'

let initialState = {
    user: {},
    isLoggedIn: false,
    error: null,
    adoptions: []
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
                user: null,
                isLoggedIn: false
            }
        case FETCH_ADOPTIONS_SUCCESS:
            return  state.adoptions.concat(payload)
        case FETCH_ADOPTIONS_FAILURE:
            return state
        default:
            return state
    }
}