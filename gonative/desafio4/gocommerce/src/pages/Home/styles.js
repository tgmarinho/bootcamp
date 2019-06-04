import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
`;

export const Categories = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 10px;
  padding-bottom: 0px;
  background: #e79799;
`;

export const CategoryButton = styled.TouchableOpacity`
  flex: 1;
  height: 30px;
  margin: 5px;
  margin-bottom: 0px;
  border-color: ${({ active }) => (active === 'camisetas' ? '#FFF' : '#e79799')};
  border-bottom-width: 5px;
`;

export const CategoryLabel = styled.Text`
  color: ${({ active }) => (active === 'camisetas' ? '#FFF' : '#ddd')};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
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
