import { createStore } from 'redux';

// Reducer
function reducer() {
  return ['fazer café', 'estudar redux', 'java', 'cooler'];
}

const store = createStore(reducer);

export default store;
