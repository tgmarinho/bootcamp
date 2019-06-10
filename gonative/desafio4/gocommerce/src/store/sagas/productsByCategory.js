import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import ProductsByCategoryActions from '~/store/ducks/productsByCategory';

export function* loadProductsByCategory({ categoryId }) {
  try {
    console.tron.log('CATEGORY:', categoryId);
    const response = yield call(api.get, `category_products/${categoryId}`);
    console.tron.log(response);
    yield put(ProductsByCategoryActions.loadProductsByCategorySuccess(response.data.products));
  } catch (error) {
    yield put(ProductsByCategoryActions.loadProductsByCategoryFailure());
  }
}
