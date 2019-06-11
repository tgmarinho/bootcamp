import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as productsByCategory } from './productsByCategory';
import { reducer as cart } from './cart';

export default combineReducers({
  categories,
  productsByCategory,
  cart,
});
