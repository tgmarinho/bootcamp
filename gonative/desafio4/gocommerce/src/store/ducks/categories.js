import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types && Creators
 */
const { Types, Creators } = createActions({
  loadCategoryRequest: null,
  loadCategorySuccess: ['data'],
  loadCategoryFailure: null,
});

export const CategoriesTypes = Types;
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
  [Types.LOAD_CATEGORY_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
