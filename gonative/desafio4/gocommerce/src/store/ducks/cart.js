import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { nullLiteral } from '@babel/types';

/**
 * Action Types && Creators
 */
const { Types, Creators } = createActions({
  addToCart: ['product'],
  updateToCart: ['productId', 'quantity'],
  deleteToCart: ['productId'],
  updateSubTotal: null,
});

export const CartTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  products: [],
  subTotal: null,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: (state, { product }) => ({
    products: [
      ...state.products.filter(prod => prod.id !== product.id),
      { ...product, quantity: 1 },
    ],
  }),

  [Types.UPDATE_TO_CART]: (state, { productId, quantity }) => ({
    products: state.products.map(prod => (prod.id === productId ? { ...prod, quantity } : prod)),
  }),
  [Types.DELETE_TO_CART]: (state, { productId }) => ({
    products: state.products.filter(product => product.id !== productId),
  }),
  [Types.UPDATE_SUB_TOTAL]: state => ({
    ...state,
    subTotal: state.products.reduce((acc, cv) => acc + cv.price * cv.quantity, 0),
  }),
});
