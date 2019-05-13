import { combineReducers } from 'redux';

import login from './login';
import repositories from './repositories';

export default combineReducers({
  login,
  repositories,
});
