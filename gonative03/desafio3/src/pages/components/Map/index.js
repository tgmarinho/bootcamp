import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import styles from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidGdtYXJpbmhvIiwiYSI6ImNqdm54bGtyODFtbGE0OXFsa21jYzVpaWMifQ.zPtUFMOSRpZLiLnuE7AiSQ',
);

export default class Main extends Component {
  renderAnnotations() {
    return (
      <View>
        <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-49.6451598, -27.2177659]}>
          <View style={styles.annotationContainer}>
            <View style={styles.annotationFill} />
          </View>
          <MapboxGL.Callout title="Rocketseat House" />
        </MapboxGL.PointAnnotation>
      </View>
    );
  }

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-49.6451598, -27.2177659]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Light}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}
