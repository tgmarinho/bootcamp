import { all, takeLatest } from 'redux-saga/effects';
import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

// all é um metodo para ligar como varios sagas (igual ao combineReducers)
// * significa que é uma função geradora (generator)
// para lidar com requisição assincrona com async/await com mais poder.
// async/await é convertido para generatos
// yield é como se fosse o await do async.

// takeLastest pega a última requisição que usuário fez, evita o problema de vários cliques
export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
