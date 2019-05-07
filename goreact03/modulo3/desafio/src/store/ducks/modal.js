/**
 * Types
 */
const Types = {
  TOGGLE_MODAL: 'modal/TOGGLE_MODAL',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  isOpen: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  toggleModal: () => ({
    type: Types.TOGGLE_MODAL,
  }),
};
