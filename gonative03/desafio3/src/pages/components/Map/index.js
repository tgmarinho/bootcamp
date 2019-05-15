import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AddUserActions } from '~/stores/ducks/addUser';

import { AnnotationContainer, Avatar } from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidGdtYXJpbmhvIiwiYSI6ImNqdm54bGtyODFtbGE0OXFsa21jYzVpaWMifQ.zPtUFMOSRpZLiLnuE7AiSQ',
);

class Map extends Component {
  state = {
    initialCoordinates: [-49.6451598, -27.2177659],
  };

  renderAnnotations = () => {
    const { users } = this.props;
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
          title={`Name: ${user.name}\nBio: ${user.bio}\nFollow: @${user.login}`}
          containterStyle={{ flex: 1, background: '#fff' }}
        />
      </MapboxGL.PointAnnotation>
    ));
  };

  handleAddUser = (location) => {
    const { openModal } = this.props;
    const [latitude, longitude] = location.geometry.coordinates;
    openModal([latitude, longitude]);
  };

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={this.state.initialCoordinates}
        style={{ flex: 1 }}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
        onLongPress={location => this.handleAddUser(location)}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.addUser.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(AddUserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
