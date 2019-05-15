// Actions Types
export const Types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
};

// Reducer
const INITIAL_STATE = {
  visible: false,
  coordinates: [],
  username: '',
  users: [],
  error: false,
  errorMessage: '',
  loading: false,
};

export function addUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, visible: true, coordinates: action.payload.coordinates };
    case Types.CLOSE_MODAL:
      return { ...state, visible: false, coordinates: '' };
    case Types.ADD_USER_REQUEST:
      return { ...state, username: action.payload.username, loading: true };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        loading: false,
        error: false,
        errorMessage: '',
        visible: false,
        coordinates: {},
        username: '',
      };
    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.error,
      };
    default:
      return state;
  }
}

//  Actions Creators
export const Creators = {
  openModal: coordinates => ({
    type: Types.OPEN_MODAL,
    payload: { coordinates },
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
  addUserRequest: username => ({
    type: Types.ADD_USER_REQUEST,
    payload: username,
  }),
  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { user },
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error },
  }),
};
