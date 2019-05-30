import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerActions from '~/store/ducks/player';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
  BackButton,
} from './styles';

class Podcast extends Component {
  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handlePlay = (episodeId) => {
    const { setPodcastRequest, navigation } = this.props;
    const podcast = navigation.getParam('podcast');
    setPodcastRequest(podcast, episodeId);
  };

  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam('podcast');

    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />

              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#FFF" />
              </BackButton>

              <Cover source={{ uri: podcast.cover }} />

              <PodcastTitle>{podcast.title}</PodcastTitle>

              <PlayButton onPress={() => this.handlePlay()}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode onPress={() => this.handlePlay(episode.id)}>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Podcast);
