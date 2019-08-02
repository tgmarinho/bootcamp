import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';

import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(ProjectsActions.getProjectsSuccess(response.data));
}

export function* createProject({ title }) {
  try {
    const response = yield call(api.post, 'projects', { title });
    yield put(ProjectsActions.createProjectSuccess(response.data));
    yield put(ProjectsActions.closeProjectModal());
    yield put(ToastActionsCreators.displayInfo('Projeto criado'));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Ops! Problema ao criar projeto'));
  }
}
