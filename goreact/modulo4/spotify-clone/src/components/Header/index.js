import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input palceholder="Search" />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/380327?v=4" alt="Avatar" /> Thiago Marinho
    </User>
  </Container>
);

export default Header;
