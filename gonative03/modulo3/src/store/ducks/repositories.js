// Types

export const Types = {
  LOAD_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
  LOAD_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
};

// Reducers
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

// Actions
export const Creators = {
  loadRepositoriesRequest: () => ({
    type: 'LOAD_REPOSITORIES_REQUEST',
  }),

  loadRepositoriesSuccess: data => ({
    type: 'LOAD_REPOSITORIES_SUCCESS',
    payload: { data },
  }),
  loadRepositoriesFailure: () => ({
    type: 'LOAD_REPOSITORIES_FAILURE',
  }),
};
