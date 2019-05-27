import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RepositoriesActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(
      api.get,
      "https://api.github.com/users/tgmarinho/repos"
    );

    yield put(RepositoriesActions.getSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.getFailure());
  }
}
