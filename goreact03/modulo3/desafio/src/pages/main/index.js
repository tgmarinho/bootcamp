import React, { Fragment } from 'react';
import GlobalStyle from '../../styles/global';
import Map from '../../components/map';
import SideBar from '../../components/sidebar';
import AddUser from '../../components/addUser';

const Main = () => (
  <Fragment>
    <GlobalStyle />
    <Map />
    <SideBar />
    <AddUser />
  </Fragment>
);

export default Main;
