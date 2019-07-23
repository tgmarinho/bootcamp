import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const Main = ({ activeTeam }) => (
  <View style={styles.backgroundWrapper}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          hitSlop={{
            top: 5,
            bottom: 5,
            left: 10,
            right: 10,
          }}
          onpress={() => {}}
        >
          <Icon name="menu" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.teamTitle}>{activeTeam ? activeTeam.name : 'Selecione um Time'}</Text>
        <TouchableOpacity
          hitSlop={{
            top: 5,
            bottom: 5,
            left: 10,
            right: 10,
          }}
          onpress={() => {}}
        >
          <Icon name="group" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

Main.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Main.defaultProps = {
  activeTeam: null,
};

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
});

export default connect(
  mapStateToProps,
  null,
)(Main);
