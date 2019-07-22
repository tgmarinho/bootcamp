import React from 'react';
import { Provider } from 'react-redux';
import '~/config/StatusBarConfig';
import store from './store';
import Routes from './routes';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
