import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';

import Modal from '~/components/Modal';

import ProjectsActions from '~/store/ducks/projects';

class NewProject extends Component {
  state = {
    newProject: '',
  };

  handleSubmit = () => {
    const { createProjectRequest, onRequestClose } = this.props;
    const { newProject } = this.state;
    createProjectRequest(newProject);
    onRequestClose();
  };

  render() {
    const { visible, onRequestClose } = this.props;
    const { newProject } = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <Text style={styles.label}>TÍTULO</Text>
        <TextInput
          style={styles.input}
          autoFocus
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={newProject}
          onChangeText={text => this.setState({ newProject: text })}
        />

        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>CRIAR PROJETO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onRequestClose} style={styles.cancel}>
          <Text style={styles.cancelText}>CANCELAR</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NewProject);
