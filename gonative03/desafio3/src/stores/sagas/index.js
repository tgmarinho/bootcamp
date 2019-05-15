import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as UserAddActions, Types as UserAddTypes } from '~/stores/ducks/addUser';

function* getUser(action) {
  try {
    const { username } = action.payload;
    const coordinates = yield select(state => state.addUser.coordinates);
    console.tron.log('SAGAO ', coordinates);
    const { data } = yield call(api.get, `/users/${username}`);

    const user = {
      id: data.id,
      login: data.login,
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      coordinates,
    };

    yield put(UserAddActions.addUserSuccess(user));
  } catch (error) {
    yield put(UserAddActions.addUserFailure(error));
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(UserAddTypes.ADD_USER_REQUEST, getUser)]);
}
