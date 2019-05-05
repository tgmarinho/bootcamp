import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>{todos && todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
    <button type="submit" onClick={() => addTodo('fazer café bom')}>
      Adicionar
    </button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
