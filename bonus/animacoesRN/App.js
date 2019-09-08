import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

class App extends Component {
  state = {
    ballY: new Animated.Value(0),
    ballX: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.ballY, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballX, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballY, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballX, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),
      ]),
      {
        iterations: 3,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.ball, {top: this.state.ballY, left: this.state.ballX}]}
        />
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
