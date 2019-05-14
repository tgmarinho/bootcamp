import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Error = styled.Text`
  color: #ff817e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
