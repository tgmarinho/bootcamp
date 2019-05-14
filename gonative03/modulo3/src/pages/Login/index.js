import React, { Component } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

export default class Login extends Component {
  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;
    try {
      await api.get(`/users/${username}`);
    } catch (error) {
      // setar o erro
    }
  };

  render() {
    const { username } = this.state;
    console.tron.log(username);

    return (
      <Container>
        <Input
          value={username}
          onChangeText={username => this.setState({ username })}
          autoCapitalize="none"
          autoCorret={false}
          placeholder="Digite seu usuário"
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}
