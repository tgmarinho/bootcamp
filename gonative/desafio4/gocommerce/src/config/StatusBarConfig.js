import { StatusBar, Platform } from 'react-native';

StatusBar.setBarStyle('dark-content');

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('#111');
}
