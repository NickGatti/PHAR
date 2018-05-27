import axios from 'axios'

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const FETCH_ADOPTIONS_SUCCESS = 'FETCH_ADOPTIONS_SUCCESS'
export const FETCH_ADOPTIONS_FAILURE = 'FETCH_ADOPTIONS_FAILURE'
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS"
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE"

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

export const fetchQuestions = () => {
    return async dispatch => {
        try {
            let res = await axios.get('http://localhost:8000/questions')
            dispatch({
                type: FETCH_QUESTIONS_SUCCESS,
                payload: res
            })
        } catch (err) {
            dispatch({
                type: FETCH_QUESTIONS_FAILURE,
                payload: err
            })
        }
    }
}

export const fetchAdoptions = () => {
    return async dispatch => {
        try {
            let res = await axios.get('http://localhost:8000/adoptions')
            dispatch({
                type: FETCH_ADOPTIONS_SUCCESS,
                payload: res.data.pet
            })
        } catch (err) {
            dispatch({
                type: FETCH_ADOPTIONS_FAILURE,
                payload: err
            })
        }
    }
}