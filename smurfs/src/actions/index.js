import axios from 'axios'

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'

export const ADDING_USER = 'ADDING_USER'
export const ADDED_USER = 'ADDED_USER'
export const ADD_USER_FAILED = 'ADD_USER_FAILED'

const baseUrl = 'http://localhost:3333/smurfs'


export const fetchData = () => (dispatch) => {

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => dispatch({type: FETCH_SUCCESS, payload: data}))
        .catch(err => dispatch({type: FETCH_FAILED}))
    
}


export const addSmurfToAPI = (smurf) => (dispatch) => {

    axios
        .post(baseUrl, smurf)
        .then(data => {
            dispatch({type: FETCH_SUCCESS, payload: smurf})
        })
        .catch(err => dispatch({type: ADD_USER_FAILED}))



}