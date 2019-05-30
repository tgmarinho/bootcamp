import TrackPlayer from 'react-native-track-player';
import store from '~/store';

import PlayerActions from '~/store/ducks/player';

export default async () => {
  TrackPlayer.addEventListener('remote-play', () => {
    store.dispatch(PlayerActions.play());
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    store.dispatch(PlayerActions.pause());
  });

  TrackPlayer.addEventListener('remote-next', () => {
    store.dispatch(PlayerActions.next());
  });

  TrackPlayer.addEventListener('remote-previous', () => {
    store.dispatch(PlayerActions.prev());
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    store.dispatch(PlayerActions.reset());
  });

};
