import { combineReducers } from 'redux';

import { reducer as podcasts } from './podcasts';
import { reducer as player } from './player';

export default combineReducers({
  podcasts,
  player,
});
