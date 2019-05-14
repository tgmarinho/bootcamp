export const loginSuccess = username => ({
  type: 'LOGIN_SUCCESS',
  payload: { username },
});
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
