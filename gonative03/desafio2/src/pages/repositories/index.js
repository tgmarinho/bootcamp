import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '~/components/Header';

export default class Repositories extends Component {
  render() {
    return (
      <View>
        <Header title="GitIssues" navigator={{ navigation: 'welcome' }} />
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color: '#000',
  },
});
