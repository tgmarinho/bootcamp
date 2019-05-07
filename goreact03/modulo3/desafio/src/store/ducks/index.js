import { combineReducers } from 'redux';

import users from './users';
import modal from './modal';

export default combineReducers({
  users,
  modal,
});
