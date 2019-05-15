import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

// call é usado quando a chamada retorna uma promise.
export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      toast.warn('Usuário já foi adicionado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      yield put(UserActions.addUserFailure('Usuário já foi adicionado'));
    } else {
      const userData = {
        id: data.id,
        login: data.login,
        name: data.name,
        avatar: data.avatar_url,
        url: data.url,
        latitude: action.payload.user.latitude,
        longitude: action.payload.user.longitude,
      };

      // envia para o reducer essa chamada da action
      toast.success('Usuário adicionado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (error) {
    toast.error('Erro ao adicionár usuário!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    yield put(UserActions.addUserFailure('Ops! Erro ao adicionar usuário'));
  } finally {
    yield put(ModalActions.toggleModal());
  }
}
