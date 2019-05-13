import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...[]));

const store = createStore(reducer, composer);

console.tron.log(store.getState());

export default store;
