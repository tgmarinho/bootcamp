import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
import SideBar from './components/SideBar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/components';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <SideBar />
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
