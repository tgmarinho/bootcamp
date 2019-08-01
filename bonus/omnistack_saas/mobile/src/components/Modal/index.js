import React from 'react';
import PropTypes from 'prop-types';

import {
  Platform, View, KeyboardAvoidingView, Modal as RNModal,
} from 'react-native';

import styles from './styles';

const Modal = ({ visible, children, onRequestClose }) => (
  <RNModal visible={visible} animationType="slide" transparent onRequestClose={onRequestClose}>
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'IOS' ? '' : null}>
      <View style={styles.content}>{children}</View>
    </KeyboardAvoidingView>
  </RNModal>
);

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Modal;
