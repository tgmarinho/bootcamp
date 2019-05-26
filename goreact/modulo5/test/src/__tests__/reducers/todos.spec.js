import todosReducer, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("Novo Todo"));

    expect(state.data[0]).toBe("Novo Todo");
  });

  it("should be able to complete todos", () => {
    const todos = ["Fazer café"];
    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("Fazer café")
    );

    expect(state.data.length).toBe(0);
  });
});
