import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
import SideBar from './components/SideBar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <SideBar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
