  
import { FETCH_SUCCESS } from '../actions/index';

export const initialState = [{

    smurf: {
        name: '',
        age: '',
        height: ''
    }

}];



export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                smurf: action.payload
            }
        default:
            return state
            
    }
}