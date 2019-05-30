import { call, put } from 'redux-saga/effects';
import TrackPlayer from 'react-native-track-player';

import PlayerActions from '~/store/ducks/player';

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  TrackPlayer.addEventListener('playback-track-changed', console.tron.log);
  TrackPlayer.addEventListener('playback-state', console.tron.log);
}

export function* setPodcast({ podcast }) {
  yield call(TrackPlayer.add, [...podcast.tracks]);
  yield put(PlayerActions.setPodcastSuccess(podcast));
  yield call(TrackPlayer.play);
}
