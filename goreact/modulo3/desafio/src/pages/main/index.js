import React, { Fragment } from 'react';
import GlobalStyle from '../../styles/global';
import Map from '../../components/map';
import SideBar from '../../components/sidebar';

const Main = () => (
  <Fragment>
    <GlobalStyle />
    <Map />
    <SideBar />
  </Fragment>
);

export default Main;
