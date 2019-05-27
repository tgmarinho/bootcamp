import { runSaga } from "redux-saga";
import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";
import MockAdapter from "axios-mock-adapter";
import api from "../../services/api";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    apiMock
      .onGet("/users/tgmarinho/repos")
      .reply(200, [
        "qualquer coisa, nao estou testando o retorno, só a chamada"
      ]);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getSuccess([
        "qualquer coisa, nao estou testando o retorno, só a chamada"
      ])
    );
  });
});
