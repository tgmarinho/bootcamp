import React from 'react';
import { Container } from './styles';
import Map from '~/pages/components/Map';
import AddUser from '~/pages/components/AddUser';

const Main = () => (
  <Container>
    <Map />
    <AddUser />
  </Container>
);

export default Main;
