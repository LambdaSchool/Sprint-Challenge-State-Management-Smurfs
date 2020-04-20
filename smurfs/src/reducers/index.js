import {
  DATA_GET,
  DATA_GET_SUCCEES,
  DATA_GET_ERROR,
  DATA_POST,
  DATA_POST_SUCCEES,
  DATA_POST_ERROR,
  DATA_NEW_NAME,
  DATA_NEW_AGE,
  DATA_NEW_HEIGHT,
  DATA_DELETE,
  DATA_DELETE_SUCCEES
} from '../actions';

const initialState = {
  smurfs: [],
  getLoading: false,
  postLoading: false,
  error: false,
  postedSuccees: false,

  // Adding new record
  addSmurf: {
    name: '',
    height: '',
    age: 0
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_GET:
      return {
        ...state,
        getLoading: true,
        error: ''
      };
    case DATA_GET_SUCCEES:
      return {
        ...state,
        getLoading: false,
        error: '',
        smurfs: action.payload
      };
    case DATA_GET_ERROR:
      return {
        ...state,
        getLoading: false,
        error: action.payload
      };
    case DATA_POST:
      return {
        ...state,
        postLoading: true,
        error: ''
      };
    case DATA_POST_SUCCEES:
      return {
        ...state,
        postLoading: false,
        postedSuccees: true,
        error: ''
      };
    case DATA_POST_ERROR:
      return {
        ...state,
        postLoading: false,
        postedSuccees: false,
        error: action.payload
      };

    case DATA_NEW_NAME:
      return {
        ...state,
        addSmurf: { ...state.addSmurf, name: action.payload }
      };
    case DATA_NEW_AGE:
      return {
        ...state,
        addSmurf: { ...state.addSmurf, age: Number(action.payload) }
      };
    case DATA_NEW_HEIGHT:
      return {
        ...state,
        addSmurf: {
          ...state.addSmurf,
          height: action.payload + 'cm'
        }
      };
    case DATA_DELETE:
      return {
        ...state,
        getLoading: false,
        error: ''
      };
    case DATA_DELETE_SUCCEES:
      return {
        ...state,
        getLoading: false
      };

    default:
      return state;
  }
};
