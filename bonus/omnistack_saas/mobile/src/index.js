import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import {Toast} from 'react-native-redux-toast'
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <App />
    <Toast />
  </Provider>
);

export default Root;
