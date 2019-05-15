import React, { Component } from 'react';
import { Modal, Alert } from 'react-native';
import {
  Container, Content, Text, Input, GroupButton, Button, ButtonText,
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
      <Modal
        animationType="fade"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Container>
          <Content>
            <Text>Adicionar novo locasl</Text>
            <Input placeholder="Usuário no Github" />
            <GroupButton>
              <Button>
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button>
                <ButtonText>Salvar</ButtonText>
              </Button>
            </GroupButton>
          </Content>
        </Container>
      </Modal>
    );
  }
}
