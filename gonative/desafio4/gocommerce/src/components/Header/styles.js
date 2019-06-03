import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  height: 54 + getStatusBarHeight();
  padding-top: getStatusBarHeight();

  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #fff;
`;
