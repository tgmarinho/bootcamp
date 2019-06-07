import styled from 'styled-components/native';

export const CartList = styled.FlatList`
  background: #eee;
`;

export const EmptyCartContainer = styled.View`
  flex: 1;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 23px;
  color: #aaa;
  text-align: center;
  margin-top: 15px;
`;

export const SubTotal = styled.View`
  height: 100px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #4f8b7d;
  font-weight: normal;
`;

export const Total = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #4f8b7d;
  font-weight: bold;
`;
