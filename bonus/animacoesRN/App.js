import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  // timing
  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }

  // spring
  // componentDidMount() {
  //   Animated.spring(this.state.ballY, {
  //     toValue: 300,
  //     bounciness: 20,
  //   }).start();
  // }

  // decay
  // componentDidMount() {
  //   Animated.decay(this.state.ballY, {
  //     velocity: 0.5,
  //   }).start();
  // }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: this.state.ballY}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
});

export default App;
