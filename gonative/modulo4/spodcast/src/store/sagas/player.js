import {
  call, put, select, take,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import TrackPlayer from 'react-native-track-player';

import PlayerActions from '~/store/ducks/player';

function* trackChanged() {
  const channel = eventChannel((emitter) => {
    const onTrackChange = TrackPlayer.addEventListener('playback-track-changed', emitter);

    return () => onTrackChange.remove();
  });

  try {
    while (true) {
      const { nextTrack } = yield take(channel);
      yield put(PlayerActions.setCurrent(nextTrack));
    }
  } finally {
    channel.close();
  }
}

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  TrackPlayer.updateOptions({
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    notificationCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  });

  TrackPlayer.addEventListener('playback-state', () => {});
}

export function* setPodcast({ podcast, episodeId }) {
  const currentPodcast = yield select(state => state.player.podcast);
  if (!currentPodcast || podcast.id !== currentPodcast.id) {
    yield call(TrackPlayer.stop);
    yield call(TrackPlayer.reset);
    yield call(TrackPlayer.add, [...podcast.tracks]);
    yield put(PlayerActions.setPodcastSuccess(podcast));
  }

  if (episodeId) {
    yield call(TrackPlayer.skip, episodeId);
    yield put(PlayerActions.setCurrent(episodeId));
  }
  yield put(PlayerActions.play());
  yield call(trackChanged);
}

export function* play() {
  yield call(TrackPlayer.play);
}

export function* pause() {
  yield call(TrackPlayer.pause);
}

export function* prev() {
  const player = yield select(state => state.player);
  const currentIndex = player.podcast.tracks.findIndex(episode => episode.id === player.current);
  if (player.podcast.tracks[currentIndex - 1]) {
    yield call(TrackPlayer.skipToPrevious);
    yield put(PlayerActions.play());
  }
}

export function* next() {
  const player = yield select(state => state.player);
  const currentIndex = player.podcast.tracks.findIndex(episode => episode.id === player.current);
  if (player.podcast.tracks[currentIndex + 1]) {
    yield call(TrackPlayer.skipToNext);
    yield put(PlayerActions.play());
  }
}

export function* reset() {
  yield call(TrackPlayer.stop);
  yield call(TrackPlayer.reset);
}
