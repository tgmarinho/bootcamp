import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';

import api from '~/services/api';

import styles from './styles';

class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation} = this.props
    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories')
    } catch (err) {
      console.tron.log('usuário inexistente');
    }
  };

  render() {
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.text}>Para continuar precisamos que você informe o seu do GitHub</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
