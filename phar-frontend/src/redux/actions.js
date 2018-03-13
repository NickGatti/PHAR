import axios from 'axios'

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const userLogin = (creds) => {
    return async dispatch => {
        try {
            let user = await axios.post('http://localhost:8000/auth', creds)
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: user
            })
        } catch (err) {
            dispatch({
                type: LOGIN_FAILED,
                payload: err
            })
        }
    }
}