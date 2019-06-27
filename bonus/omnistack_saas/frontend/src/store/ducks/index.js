import { combineReducers } from 'redux';

import { reducer as auth } from './auth';

export default combineReducers({
  auth,
});
