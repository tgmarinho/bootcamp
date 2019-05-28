import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: getStatusBarHeight() + 30, paddingBottom: 30 },
})``;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;
export const Cover = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;
export const Info = styled.View`
  margin-left: 15px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const Count = styled.Text`
  color: #c4c4c4;
  font-size: 16px;
  margin-top: 3px;
`;
