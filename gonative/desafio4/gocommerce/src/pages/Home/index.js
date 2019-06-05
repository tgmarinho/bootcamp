import React, { Fragment, Component } from 'react';
import { withNavigation } from 'react-navigation';

import {
  Container,
  ProductsList,
  Product,
  Image,
  Name,
  Brand,
  Price,
  Categories,
  CategoryButton,
  CategoryLabel,
} from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    headerTintColor: '#ee7777',
    headerTitleStyle: { alignSelf: 'center' },
  };

  render() {
    return (
      <Container>
        <Categories>
          <CategoryButton active="camisetas">
            <CategoryLabel active="camisetas">camisetas</CategoryLabel>
          </CategoryButton>
          <CategoryButton>
            <CategoryLabel>camisas</CategoryLabel>
          </CategoryButton>
          <CategoryButton>
            <CategoryLabel>bonés</CategoryLabel>
          </CategoryButton>
          <CategoryButton>
            <CategoryLabel>blusas</CategoryLabel>
          </CategoryButton>
          <CategoryButton>
            <CategoryLabel>casacos</CategoryLabel>
          </CategoryButton>
          <CategoryButton>
            <CategoryLabel>outros</CategoryLabel>
          </CategoryButton>
        </Categories>
        <ProductsList
          data={[
            {
              id: 1,
              name: 'Camiseta Hyperas Preta',
              brand: 'Quiksilver',
              image:
                'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
              price: 49.99,
            },
            {
              id: 2,
              name: 'Camiseta Double Tap Preta',
              brand: 'Quiksilver',
              image:
                'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
              price: 59.99,
            },
            {
              id: 3,
              name: 'Camiseta Logo Azul',
              brand: 'Red Bull',
              image:
                'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
              price: 54.99,
            },
            {
              id: 4,
              name: 'Camiseta Primo Tipper',
              brand: 'Rip Curl',
              image:
                'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
              price: 39.99,
            },
          ]}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product onPress={() => this.props.navigation.navigate('ProductDetail', { product })}>
              <Image source={{ uri: product.image }} />
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
              <Price>{product.price}</Price>
            </Product>
          )}
        />
      </Container>
    );
  }
}

export default withNavigation(Home);
