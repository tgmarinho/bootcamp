import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Categories = styled.ScrollView.attrs({
  horizontal: true,
})`
  /* flex: 1; */
  /* flex-direction: row; */
  /* justify-content: center; */
  /* height: 30px; */
  background: #e79799;
`;

export const Category = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  margin: 5px;
  border-bottom-width: 20px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #eee;
`;
export const Product = styled.View`
  margin: 5px;
  padding: 5px;
  width: 45%;
  height: 300px;
  background-color: #fff;
`;
export const Imagem = styled.Image`
  width: 150;
  height: 150;
  align-self: center;
`;
export const Title = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;
export const Brand = styled.Text`
  margin-top: 10px;
  font-size: 10px;
  color: #666;
`;
export const Price = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #8dd9c8;
  font-weight: bold;
`;
