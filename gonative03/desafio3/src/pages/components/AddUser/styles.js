import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Content = styled.View`
  /* flex: 1; */
  width: 98%;
  height: 25%;
  /* margin: 50px; */
  justify-content: center;
  align-items: center;
  background: #f5f5f5;

  /* margin: 10px; */
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
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
export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;
