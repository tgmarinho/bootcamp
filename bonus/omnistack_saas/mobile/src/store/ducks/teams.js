import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
  selectTeam: ['team'],
  openTeamModal: null,
  closeTeamModal: null,
  createTeamRequest: ['name'],
  createTeamSuccess: ['team'],
});

export const TeamsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  active: null,
  teamModalOpen: false,
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });
export const selectTeamSuccess = (state, { team }) => state.merge({ active: team });
export const openModal = state => state.merge({ teamModalOpen: true });
export const closeModal = state => state.merge({ teamModalOpen: false });
export const createSuccess = (state, { team }) => state.merge({ data: [...state.data, team] });
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeamSuccess,
  [Types.OPEN_TEAM_MODAL]: openModal,
  [Types.CLOSE_TEAM_MODAL]: closeModal,
  [Types.CREATE_TEAM_SUCCESS]: createSuccess,
});
