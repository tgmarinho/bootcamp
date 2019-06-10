import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '~/store/ducks/categories';
import { ProductsByCategoryTypes } from '~/store/ducks/productsByCategory';
import { loadCategories } from './categories';
import { loadProductsByCategory } from './productsByCategory';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.LOAD_CATEGORY_REQUEST, loadCategories),
    takeLatest(ProductsByCategoryTypes.LOAD_PRODUCTS_BY_CATEGORY_REQUEST, loadProductsByCategory),
  ]);
}
