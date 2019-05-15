import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AddUserActions } from '~/stores/ducks/addUser';

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

const AddUser = ({
  visible, loading, closeModal, addUserRequest,
}) => {
  const [username, setUsername] = useState('');

  const handleSaveUser = () => {
    console.tron.log(username, addUserRequest);
    if (username === '') return;

    addUserRequest(username);
  };

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
            onChangeText={username => setUsername({ username: username.trim() })}
            autoCapitalize="none"
            autoCorret={false}
          />
          <GroupButton>
            <Cancel>
              <ButtonText onPress={closeModal}>Cancelar</ButtonText>
            </Cancel>
            <Save>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText onPress={handleSaveUser}>Salvar</ButtonText>
              )}
            </Save>
          </GroupButton>
        </Content>
      </Container>
    </ModalAddUser>
  );
};

const mapStateToProps = state => ({
  visible: state.addUser.visible,
  loading: state.addUser.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AddUserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
