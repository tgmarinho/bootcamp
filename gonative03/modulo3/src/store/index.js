import { createStore, compose, applyMiddleware } from 'redux';

import todos from './reducers/todos';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...[]));

const store = createStore(todos, composer);

export default store;
