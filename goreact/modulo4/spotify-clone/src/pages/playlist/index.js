import React from 'react';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/5193WwLsvgL._SX384_BO1,204,203,200_.jpg"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>

        <button>Play</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
