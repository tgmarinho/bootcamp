import { combineReducers } from 'redux';

import users from './users';
import modal from './modal';
import searchUser from './searchUser';

export default combineReducers({
  users,
  modal,
  searchUser,
});
