import React, { Fragment } from 'react';
import { ModalProvider } from 'styled-react-modal';
import GlobalStyle from '../../styles/global';
import Map from '../../components/map';
import SideBar from '../../components/sidebar';
import AddUser from '../../components/addUser';
import { FadingBackground } from '../../components/addUser/styles';

const Main = () => (
  <Fragment>
    <GlobalStyle />
    <Map />
    <SideBar />
  </Fragment>
);

export default Main;
