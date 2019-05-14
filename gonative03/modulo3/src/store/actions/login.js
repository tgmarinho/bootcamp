export const loginRequest = username => ({
  type: 'LOGIN_REQUEST',
  payload: { username },
});

export const loginSuccess = username => ({
  type: 'LOGIN_SUCCESS',
  payload: { username },
});
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
