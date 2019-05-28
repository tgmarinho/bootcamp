import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import PodcastActions from '~/store/ducks/podcasts';

export function* load() {
  try {
    const response = yield call(api.get, 'podcasts');
    yield put(PodcastActions.loadSuccess(response.data));
  } catch (error) {
    yield put(PodcastActions.loadFailure());
  }
}
