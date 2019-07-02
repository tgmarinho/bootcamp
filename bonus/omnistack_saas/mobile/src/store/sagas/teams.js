import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import TeamsActions from '../ducks/teams';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  yield put(TeamsActions.getTeamsSuccess(response.data));
}

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, 'teams', { name });
    yield put(TeamsActions.createTeamSuccess(response.data));
    yield put(TeamsActions.closeTeamModal());
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operação',
        message: 'Houve um erro, tente novamente!',
      }),
    );
  }
}
