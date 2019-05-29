import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})``;

export const PodcastDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${340 + getStatusBarHeight()}px;
  opacity: 0.2;
`;

export const PodcastTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 50px;
  background: #1db954;
  margin: 30px 40px 0;
  border-radius: 25px;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const Episode = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Author = styled.Text`
  color: #c4c4c4;
  font-size: 16px;
  margin-top: 3px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5, left: 5, right: 5, bottom: 5,
  },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 30}px;
`;
