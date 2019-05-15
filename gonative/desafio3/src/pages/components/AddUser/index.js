import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  TextError,
} from './styles';

const AddUser = ({
  visible, loading, error, closeModal, addUserRequest,
}) => {
  const [username, setUsername] = useState('');

  const handleSaveUser = () => {
    if (username.trim() === '') return;
    addUserRequest(username);
    setUsername('');
  };

  const handleCloseModal = () => {
    setUsername('');
    closeModal();
  };

  return (
    <ModalAddUser animationType="fade" transparent visible={visible}>
      <Container>
        <Content>
          <Text>Adicionar novo local</Text>
          {error ? <TextError>Ops! Ocorreu um erro.</TextError> : null}
          <Input
            placeholder="Usuário no Github"
            value={username}
            onChangeText={username => setUsername(username)}
            autoCapitalize="none"
            autoCorret={false}
          />
          <GroupButton>
            <Cancel onPress={handleCloseModal}>
              <ButtonText>Cancelar</ButtonText>
            </Cancel>
            <Save onPress={handleSaveUser}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Salvar</ButtonText>
              )}
            </Save>
          </GroupButton>
        </Content>
      </Container>
    </ModalAddUser>
  );
};

AddUser.propTypes = {
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visible: state.addUser.visible,
  loading: state.addUser.loading,
  error: state.addUser.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(AddUserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
