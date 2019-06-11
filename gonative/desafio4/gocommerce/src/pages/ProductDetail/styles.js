import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  padding: 20px;
`;

export const Product = styled.View`
  padding: 20px;
  border-radius: 4px;
  padding-bottom: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 250;
  height: 250;
`;
export const Name = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;
export const Brand = styled.Text`
  font-size: 10px;
  color: #666;
`;
export const Price = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #02c9b2;
  font-weight: bold;
`;

export const AddToCart = styled.TouchableOpacity`
  background: #02c9b2;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;

export const Box = styled.View`
  flex: 1;
`;

export const AddToCartLabel = styled.Text`
  color: #fff;
  font-weight: bold;
`;
