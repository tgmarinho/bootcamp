import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background: #111;
  height: ${74 + getBottomSpace()}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px ${getBottomSpace()}px;
`;

export const CoverBackground = styled.Image.attrs({
  blurRadius: 5,
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0.2;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Author = styled.Text`
  font-size: 14px;
  color: #c4c4c4;
  margin-top: 3px;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  margin-left: 10px;
`;

export const ControlIcon = styled(Icon).attrs({
  color: '#FFF',
  size: 32,
})``;
