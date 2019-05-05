import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <ul>{todos && todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
);

TodoList.propTypes = {
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

export default connect(mapStateToProps)(TodoList);
