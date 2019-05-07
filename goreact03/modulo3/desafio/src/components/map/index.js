import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { Imagem } from './styles';
// import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.2282566,
      longitude: -54.8108955,
      zoom: 14,
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
    const [latitude, longitude] = e.lngLat;
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude,
        longitude,
      },
    });

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={this.state.viewport.latitude}
          longitude={this.state.viewport.longitude}
          onClick={this.handleMapClick}
          captureClick
        >
          <Imagem src="https://avatars2.githubusercontent.com/u/2254731?v=4" />
        </Marker>
      </MapGL>
    );
  }
}
