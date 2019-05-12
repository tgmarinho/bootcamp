import { createStore } from 'redux';

// Reducers
const INITIAL_STATE = [
  { id: 1, text: 'fazer café', completed: false },
  { id: 2, text: 'estudar redux', completed: true },
  { id: 3, text: 'java', completed: false },
];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.text, completed: false }];
    case 'MARK_AS_COMPLETED':
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
