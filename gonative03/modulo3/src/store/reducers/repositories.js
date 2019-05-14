// Reducers
const INITIAL_STATE = [
  {
    data: [],
    loading: false,
    error: false,
  },
];

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_REPOSITORIES_REQUEST':
      return { ...state, loading: true };
    case 'LOAD_REPOSITORIES_SUCCESS':
      console.tron.log(action);
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case 'LOAD_REPOSITORIES_FAILURE':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
