import {
  ADD_SMURF,
  POST_SMURF,
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_SMURF_FAILED
} from "../actions/actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        newSmurf: [
          {
            name: action.payload.name,
            age: action.payload.age,
            height: action.payload.height
          }
        ]
      };
    case POST_SMURF:
      return {
        state
      };

    case POST_SMURF_FAILED:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };

    case START_FETCHING:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        smurfs: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

export default reducer;
