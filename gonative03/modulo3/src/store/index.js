import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers/login';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...[]));

const store = createStore(reducer, composer);

export default store;
