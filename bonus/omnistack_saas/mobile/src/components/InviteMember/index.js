import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MembersActions from '~/store/ducks/members';

import Modal from '~/components/Modal';

import styles from './styles';

class InviteMember extends Component {
  state = { email: '' };

  handleSubmit = () => {
    const { inviteMemberRequest, onRequestClose } = this.props;
    const { email } = this.state;
    inviteMemberRequest(email);
    onRequestClose();

    this.setState({ email: '' });
  };

  render() {
    const { visible, onRequestClose } = this.props;
    const { email } = this.state;

    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />

        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>CONVIDAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onRequestClose} style={styles.cancel}>
          <Text style={styles.cancelText}>CANCELAR</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(InviteMember);
