import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/5193WwLsvgL._SX384_BO1,204,203,200_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo so as melhres do rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/5193WwLsvgL._SX384_BO1,204,203,200_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo so as melhres do rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/5193WwLsvgL._SX384_BO1,204,203,200_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo so as melhres do rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/5193WwLsvgL._SX384_BO1,204,203,200_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto voce programa ouvindo so as melhres do rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
