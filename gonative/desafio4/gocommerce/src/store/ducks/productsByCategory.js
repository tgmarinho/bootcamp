import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types && Creators
 */
const { Types, Creators } = createActions({
  loadProductsByCategoryRequest: ['categoryId'],
  loadProductsByCategorySuccess: ['data'],
  loadProductsByCategoryFailure: null,
});

export const ProductsByCategoryTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: true,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_BY_CATEGORY_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
