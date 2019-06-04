import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: ${54 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #e79799;
`;
