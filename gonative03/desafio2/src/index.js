import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import '~/config/ReactotronConfig';
import Header from '~/components/Header';

export default class App extends Component {
  render() {
    return (
      <View>
          <Header title="Teste" navigator={{ navigation: 'welcome' }} />
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
});
