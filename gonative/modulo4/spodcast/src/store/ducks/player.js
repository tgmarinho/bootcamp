import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  setPodcastRequest: ['podcast', 'episideId'],
  setPodcastSuccess: ['poscast'],
});

export const PlayerTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id }),
});
