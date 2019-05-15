/**
 * Types
 */
export const Types = {
  ON_SEARCH: 'searchUser/ON_SEARCH',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  latitude: '',
  longitude: '',
  user: '',
};

export default function searchUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ON_SEARCH:
      return { ...action.payload.coordenadas };

    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  onSearch: coordenadas => ({
    type: Types.ON_SEARCH,
    payload: { coordenadas },
  }),
};
