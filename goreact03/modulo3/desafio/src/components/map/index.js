import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalProvider } from 'styled-react-modal';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as SearchActions } from '../../store/ducks/searchUser';

import { FadingBackground } from '../addUser/styles';
import AddUser from '../addUser';

import { Imagem } from './styles';
// import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.2282566,
      longitude: -54.8108955,
      zoom: 15,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.props.onSearch({ longitude, latitude });
    this.props.toggleModal();
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { users } = this.props;

    return (
      <Fragment>
        <MapGL
          {...viewportState}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {users
            && !!users.length
            && users.map(user => (
              <Marker key={user.id} latitude={user.latitude} longitude={user.longitude}>
                <Imagem src={user.avatar} alt={`${user.name} Avatar`} />
              </Marker>
            ))}
        </MapGL>

        <ModalProvider backgroundComponent={FadingBackground}>
          <AddUser />
        </ModalProvider>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ isOpen: state.modal.isOpen, users: state.users.data });

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions, ...SearchActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
