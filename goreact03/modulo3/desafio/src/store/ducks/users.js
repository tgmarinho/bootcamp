/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: [
    {
      id: '123',
      name: 'Diego Rocket',
      avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      login: '@diegogithub',
    },
  ],
  error: null,
};

/**
 * Actions
 */
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return state;

    default:
      return state;
  }
}
