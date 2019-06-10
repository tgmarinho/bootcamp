import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux'
import store from '~/store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
