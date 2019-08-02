import { call, put, select } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import api from '../../services/api';
import NavigationService from '~/services/navigation';
import { ToastActionsCreators } from 'react-native-redux-toast';


import AuthActions from '../ducks/auth';
import TeamsActions from '../ducks/teams';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Omni:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  const team = yield call([AsyncStorage, 'getItem'], '@Omni:team');

  if (team) {
    yield put(TeamsActions.selectTeam(JSON.parse(team)));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Ops! Erro ao logar, verifique seus dados'));

  }
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });
    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    // yield put(push('/'));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Ops! Erro ao criar login, verifique seus dados'));

  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);

  // yield put(push('/signin'));
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signedIn);
  if (!signedIn || !team) return;

  const response = yield call(api.get, 'permissions');
  const { roles, permissions } = response.data;

  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
