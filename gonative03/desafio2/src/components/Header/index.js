import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, Text, StatusBar, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = ({ title, navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
      <Icon name="exchange" sinze={16} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.left} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.string,
  }).isRequired,
};

export default Header;
