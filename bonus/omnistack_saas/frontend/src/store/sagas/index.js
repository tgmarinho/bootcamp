import { all, takeLatest } from 'redux-saga/effects';

import { signIn } from './auth';
import { AuthTypes } from '../ducks/auth';

import { getTeams } from './teams';
import { TeamsTypes } from '../ducks/teams';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
  ]);
}
