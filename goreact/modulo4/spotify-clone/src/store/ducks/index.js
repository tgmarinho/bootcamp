import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';

export default combineReducers({
  playlists,
  playlistDetails,
});
