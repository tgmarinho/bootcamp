import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';

export default combineReducers({
  auth,
  toastr,
});
