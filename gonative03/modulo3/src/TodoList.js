import React from 'react';

import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';

// import { Container } from './styles';

const TodoList = ({ todos, dispatch }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {todos.map(todo => (
      <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }} key={todo.id}>
        {todo.text}
      </Text>
    ))}
    <Button onPress={() => dispatch({ type: 'ADD_TODO', text: 'novo todo' })} title="Add todo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
