import { combineReducers } from 'redux';

import { reducer as podcasts } from './podcasts';

export default combineReducers({
  podcasts,
});
