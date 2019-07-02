import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  openMembersModal: null,
  closeMembersModal: null,
});

export const MembersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  membersModalOpen: false,
});

/* Reducers */

export const openModal = state => state.merge({ membersModalOpen: true });
export const closeModal = state => state.merge({ membersModalOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MEMBERS_MODAL]: openModal,
  [Types.CLOSE_MEMBERS_MODAL]: closeModal,
});
