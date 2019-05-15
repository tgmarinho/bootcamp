import React, { useState } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/stores/ducks/modal';

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

const AddUser = ({ visible, toogle }) => {
  const [username, setUsername] = useState('');

  console.tron.log('toogle::', toogle);

  return (
    <ModalAddUser
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <Container>
        <Content>
          <Text>Adicionar novo local</Text>
          <Input
            placeholder="Usuário no Github"
            value={username}
            onChangeText={username => setUsername({ username })}
            autoCapitalize="none"
            autoCorret={false}
          />
          <GroupButton>
            <Cancel>
              <ButtonText onPress={() => toogle()}>Cancelar</ButtonText>
            </Cancel>
            <Save>
              <ButtonText onPress={() => {}}>Salvar</ButtonText>
            </Save>
          </GroupButton>
        </Content>
      </Container>
    </ModalAddUser>
  );
};

const mapStateToProps = state => ({
  visible: state.toogle.visible,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
