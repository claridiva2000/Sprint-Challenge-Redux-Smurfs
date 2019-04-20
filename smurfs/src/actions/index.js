import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'

export const getSmurfs = (smurfData) => dispatch => {
  dispatch({ type: SMURF_START });
  axios
    .get('http://localhost:3333/smurfs', smurfData)
    .then(res => dispatch({ type: SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch(err => dispatch({ ADD_SMURF_FAILED, payload: err }));
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
