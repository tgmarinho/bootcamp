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
  border-color: ${({ active }) => (active ? '#FFF' : '#e79799')};
  border-bottom-width: 5px;
`;

export const CategoryLabel = styled.Text`
  color: ${({ active }) => (active ? '#FFF' : '#ddd')};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  columnWrapperStyle: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
})`
  background-color: #eee;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  border-radius: 4px;
  padding: 0 10px;
  margin: 5px;
  padding-bottom: 10px;
  width: 170px;
  background-color: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 160;
  width: 100%;
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
