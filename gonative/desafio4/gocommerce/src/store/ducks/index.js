import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as productsByCategory } from './productsByCategory';

export default combineReducers({
  categories,
  productsByCategory,
});
