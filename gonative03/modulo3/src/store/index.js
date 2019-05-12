import { createStore } from 'redux';

// Reducer

// Actions
// Adicionar um todo
// Marcar como completo
// Remover um todo

// ACTIONS
// { type: 'ADD_TODO', text: 'novo todo' }
// { type: 'COMPLETE_TODO', id: 3 }
// { type: 'REMOVE_TODO', id: 1 }
const INITIAL_STATE = ['fazer café', 'estudar redux', 'java', 'cooler'];

function reducer(state = INITIAL_STATE, action) {
  console.tron.log(action);
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }
  return state;
}

const store = createStore(reducer);

export default store;
