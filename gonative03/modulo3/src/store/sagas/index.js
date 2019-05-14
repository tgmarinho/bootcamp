import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

import * as LoginActions from '../actions/login';
import * as RepositoriesActions from '../actions/repositories';

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);
    yield put(LoginActions.loginSuccess(username));
    navigate('Repositories');
  } catch (error) {
    console.tron.log('ERROR: ', error);
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);
    const response = yield call(api.get, `/users/${username}/repos`);
    console.tron.log('reponse:', response);
    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
