const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return [...state, action.payload.data];

    default:
      return state;
  }
}
