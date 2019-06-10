import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* loadCategories() {
  try {
    const response = yield call(api.get, 'categories');
    yield put(CategoriesActions.loadCategorySuccess(response.data));
  } catch (error) {
    yield put(CategoriesActions.loadCategoryFailure());
  }
}
