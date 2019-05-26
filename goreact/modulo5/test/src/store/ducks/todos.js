/**
 * Types
 */
export const Types = {
  ADD: "ADD_TODO"
};

/**
 * Reducers
 */
export const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { data: [...state.data, action.payload.todo] };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  })
};
