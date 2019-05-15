import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  ModalAddUser,
  Container,
  Content,
  Text,
  Input,
  GroupButton,
  Save,
  Cancel,
  ButtonText,
} from './styles';

export default class AddUser extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <ModalAddUser
        animationType="fade"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Container>
          <Content>
            <Text>Adicionar novo local</Text>
            <Input placeholder="Usuário no Github" />
            <GroupButton>
              <Cancel>
                <ButtonText>Cancelar</ButtonText>
              </Cancel>
              <Save>
                <ButtonText>Salvar</ButtonText>
              </Save>
            </GroupButton>
          </Content>
        </Container>
      </ModalAddUser>
    );
  }
}
