import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store';

console.tron.log('Iniciando Reactotron');

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
