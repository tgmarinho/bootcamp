import React from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';

// import { Container } from './styles';

const TodoList = ({ todos }) => {
  console.tron.log(todos);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {todos.map(todo => (
        <Text key={todo}>{todo}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
