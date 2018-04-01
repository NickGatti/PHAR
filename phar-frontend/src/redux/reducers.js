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
    let newState
    let newAdoptions
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
            newAdoptions = state.adoptions.concat(payload)
            newState = Object.assign({}, state)
            newState.adoptions = newAdoptions
            return  {...newState}
        case FETCH_ADOPTIONS_FAILURE:
            return state
        default:
            return state
    }
}