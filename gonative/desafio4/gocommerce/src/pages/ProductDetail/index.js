import React, { Fragment, Component } from 'react';
import { withNavigation } from 'react-navigation';

import {
  Container,
  Product,
  Image,
  Content,
  Box,
  Name,
  Brand,
  Price,
  AddToCart,
  AddToCartLabel,
} from './styles';

class ProductDetail extends Component {
  static navigationOptions = {
    showLabel: false,
    tabBarLabel: false,
    title: 'Detalhes ',
    headerTintColor: '#ee7777',
    headerTitleStyle: { alignSelf: 'center' },
  };

  render() {
    console.tron.log(this.props);
    const product = this.props.navigation.getParam('product');
    return (
      <Fragment>
        <Container>
          <Product>
            <Image source={{ uri: product.image }} />
            <Content>
              <Box>
                <Name>{product.name}</Name>
                <Brand>{product.brand}</Brand>
              </Box>
              <Price>{product.price}</Price>
            </Content>

            <AddToCart>
              <AddToCartLabel>Adicionar ao carrinho</AddToCartLabel>
            </AddToCart>
          </Product>
        </Container>
      </Fragment>
    );
  }
}

export default withNavigation(ProductDetail);
