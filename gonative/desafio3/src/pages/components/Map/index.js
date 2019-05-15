import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AddUserActions } from '~/stores/ducks/addUser';
import Config from 'react-native-config';
import { AnnotationContainer, Avatar } from './styles';

MapboxGL.setAccessToken(Config.MAP_BOX_TOKEN);

const DEFAULT_COORDINATES = [-49.6451598, -27.2177659];

const Map = ({ users, openModal }) => {
  const [coordinates, setCoordinates] = useState(DEFAULT_COORDINATES);

  const renderAnnotations = () => {
    return users.map(user => (
      <MapboxGL.PointAnnotation
        id={String(user.id)}
        key={user.id}
        coordinate={[...user.coordinates]}
        title=""
      >
        <AnnotationContainer>
          <Avatar source={{ uri: user.avatar_url }} />
        </AnnotationContainer>
        <MapboxGL.Callout
          title={`Nome: ${user.name}\nBio: ${user.bio}\nFollow: @${user.login}`}
          containterStyle={{ flex: 1, background: '#f5f5f5' }}
        />
      </MapboxGL.PointAnnotation>
    ));
  };

  const handleAddUser = (location) => {
    const [latitude, longitude] = location.geometry.coordinates;
    openModal([latitude, longitude]);
  };

  return (
    <MapboxGL.MapView
      centerCoordinate={coordinates}
      style={{ flex: 1 }}
      showUserLocation
      styleURL={MapboxGL.StyleURL.Dark}
      onLongPress={location => handleAddUser(location)}
    >
      {renderAnnotations()}
    </MapboxGL.MapView>
  );
};


Map.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    coordinates: PropTypes.array,
  })).isRequired,
  openModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  users: state.addUser.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(AddUserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
