import styled from 'styled-components/native';

export const Content = styled.View`
  margin: 13px;
  height: 100px;
  border-radius: 4px;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 80%;
  width: 10%;
`;

export const Box = styled.View``;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const Brand = styled.Text`
  font-size: 10px;
  color: #666;
`;
export const Price = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #4f8b7d;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  placeholder: '1',
  underlineColorAndroid: 'transparent',
  placeholderTextColor: '#999',
  keyboardType: 'numeric',
})`
  height: 30px;
  background: #fff;
  border: 1px;
  width: 35px;
  border-radius: 4px;
  border-color: #999;
  padding: 5px;
`;

export const Delete = styled.TouchableOpacity`
  margin-left: 15px;
`;
