export const loadRepositoriesRequest = () => ({
  type: 'LOAD_REPOSITORIES_REQUEST',
});

export const loadRepositoriesSuccess = data => ({
  type: 'LOAD_REPOSITORIES_SUCCESS',
  payload: { data },
});
export const loadRepositoriesFailure = () => ({
  type: 'LOAD_REPOSITORIES_FAILURE',
});
