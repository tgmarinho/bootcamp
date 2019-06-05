import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Title } from './styles';

const Header = ({ title, navigation }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.string,
  }),
};

export default withNavigation(Header);
