// Actions Types
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

// Reducers
const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

//  Actions Creators
export const Creators = {
  loginRequest: username => ({
    type: 'LOGIN_REQUEST',
    payload: { username },
  }),

  loginSuccess: username => ({
    type: 'LOGIN_SUCCESS',
    payload: { username },
  }),
  loginFailure: () => ({
    type: 'LOGIN_FAILURE',
  }),
};
