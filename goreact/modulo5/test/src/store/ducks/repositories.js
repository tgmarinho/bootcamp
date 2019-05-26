/**
 * Types
 */
export const Types = {
  GET_REQUEST: "GET_REQUEST",
  GET_SUCCESS: "GET_SUCCESS",
  GET_FAILURE: "GET_FAILURE"
};

/**
 * Reducers
 */
export const INITIAL_STATE = {
  data: []
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  getRequest: todo => ({
    type: Types.GET_REQUEST
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getFailure: () => ({
    type: Types.GET_FAILURE
  })
};
