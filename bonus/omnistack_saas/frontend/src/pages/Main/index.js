import React, { Component } from 'react';
import api from '~/services/api';
import { Container } from './styles';

import TeamSwitcher from '~/components/TeamSwitcher';

const Main = () => (
  <Container>
    <TeamSwitcher />
  </Container>
);

export default Main;
