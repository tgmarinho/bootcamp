import React from 'react';
import { Container } from './styles';

import TeamSwitcher from '~/components/TeamSwitcher';
import Project from '~/components/Projects';

const Main = () => (
  <Container>
    <TeamSwitcher />
    <Project />
  </Container>
);

export default Main;
