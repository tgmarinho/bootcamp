import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

const Repositories = () => (
  <View>
    <Header title="Repositórios" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
