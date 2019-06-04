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
  margin: 10px;
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

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {
    marginTop: 10,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})`
  background-color: #eee;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 0 20px;
  margin: 5px;
  padding-bottom: 10px;
  width: 150px;
  background-color: #fff;
`;

export const Image = styled.Image`
  width: 150;
  height: 150;
  align-self: center;
`;
export const Name = styled.Text`
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
  color: #4f8b7d;
  font-weight: bold;
`;
