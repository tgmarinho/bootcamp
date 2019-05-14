import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../../store/actions/login';
import api from '../../services/api';
import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

class Login extends Component {
  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailure, navigation } = this.props;

    try {
      await api.get(`/users/${username}`);
      loginSuccess(username);
      navigation.navigate('Repositories');
    } catch (error) {
      loginFailure();
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;
    return (
      <Container>
        {error && <Error>Usuário inexistente </Error>}

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

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
