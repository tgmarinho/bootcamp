import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Container, Title } from './styles';

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withNavigation(Header);
