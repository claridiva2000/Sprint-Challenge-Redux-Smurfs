/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  SMURF_START,
  SMURF_SUCCESS,
  SMURF_FAILURE,
  ADD_SMURF,
  // ADD_SMURF_FAILED
} from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  error: '',
   deletingSmurf: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case SMURF_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true
      };

    case SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload
      };
   
    case ADD_SMURF:
      return {
        smurfs: action.payload
      };
    case SMURF_FAILURE:
    default:
      return state;
  }
}

export default reducer;
