import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ['data'],
  openProjectModal: null,
  closeProjectModal: null,
  createProjectRequest: ['title'],
  createProjectSuccess: ['project'],
});

export const ProjectsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpen: false,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });
export const openModal = state => state.merge({ projectModalOpen: true });
export const closeModal = state => state.merge({ projectModalOpen: false });
export const createSuccess = (state, { project }) => state.merge({ data: [...state.data, project] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: success,
  [Types.OPEN_PROJECT_MODAL]: openModal,
  [Types.CLOSE_PROJECT_MODAL]: closeModal,
  [Types.CREATE_PROJECT_SUCCESS]: createSuccess,
});
