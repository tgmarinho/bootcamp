import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import player from '~/services/player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => player);
