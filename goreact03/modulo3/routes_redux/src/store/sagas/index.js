import { all } from 'redux-saga/effects';

// all é um metodo para ligar como varios sagas (igual ao combineReducers)
// * significa que é uma função geradora (generator)
// para lidar com requisição assincrona com async/await com mais poder.
// async/await é convertido para generatos
// yield é como se fosse o await do async.
export default function* rootSaga() {
  yield all([]);
}
