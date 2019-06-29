import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ['data'],
});

export const ProjectsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: success,
});
