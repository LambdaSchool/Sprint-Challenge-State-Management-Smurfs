import axios from 'axios';

export const DATA_GET = 'DATA_GET';
export const DATA_GET_SUCCEES = 'DATA_GET_SUCCEES';
export const DATA_GET_ERROR = 'DATA_GET_ERROR';

export const DATA_POST = 'DATA_POST';
export const DATA_POST_SUCCEES = 'DATA_GET_SUCCEES';
export const DATA_POST_ERROR = 'DATA_POST_ERROR';

export const DATA_NEW_NAME = 'DATA_NEW_NAME';
export const DATA_NEW_AGE = 'DATA_NEW_AGE';
export const DATA_NEW_HEIGHT = 'DATA_NEW_HEIGHT';

export const DATA_DELETE = 'DATA_DELETE ';
export const DATA_DELETE_SUCCEES = 'DATA_DELETE_SUCCEES';

export const getData = () => dispatch => {
  dispatch({ type: DATA_GET });
  setTimeout(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response =>
        dispatch({ type: DATA_GET_SUCCEES, payload: response.data })
      )
      .catch(error => dispatch({ type: DATA_GET_ERROR, payload: error }));
  }, 1500);
};

export const postData = addSmurf => dispatch => {
  dispatch({ type: DATA_POST });

  axios
    .post('http://localhost:3333/smurfs', addSmurf)
    .then(response => {
      dispatch({ type: DATA_POST_SUCCEES, payload: response.data });
    })
    .catch(errore => {
      dispatch({ type: DATA_POST_ERROR, payload: errore });
    });
};

export const handleNewName = e => {
  return { type: DATA_NEW_NAME, payload: e.target.value };
};

export const handleNewAge = e => {
  return { type: DATA_NEW_AGE, payload: e.target.value };
};

export const handleNewHeight = e => {
  return { type: DATA_NEW_HEIGHT, payload: e.target.value };
};

export const deleteSmurf = smurfId => dispatch => {
  dispatch({ type: DATA_DELETE });

  axios.delete(`http://localhost:3333/smurfs/${smurfId}`).then(response => {
    dispatch({ type: DATA_DELETE_SUCCEES, payload: response.data });
  });
};
