// Actions Types

export const Types = {
  TOOGLE: 'TOOGLE',
};

// Reducer
const INITIAL_STATE = {
  visible: true,
};

export function toogle(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOOGLE:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
}

//  Actions Creators
export const Creators = {
  toogle: () => ({
    type: Types.TOOGLE,
  }),
};
