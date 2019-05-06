import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

// call é usado quando a chamada retorna uma promise.
export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    // envia para o reducer essa chamada da action
    yield put(addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoriteFailure('Erro ao adicionar repositório'));
  }
}
