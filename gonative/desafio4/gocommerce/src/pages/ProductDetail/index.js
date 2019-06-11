import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

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
    const { navigation, addToCart, updateSubTotal } = this.props;

    const product = navigation.getParam('product');
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
              <Price>{`R$ ${product.price}`}</Price>
            </Content>

            <AddToCart
              onPress={() => {
                addToCart(product);
                updateSubTotal();
              }}
            >
              <AddToCartLabel>Adicionar ao carrinho</AddToCartLabel>
            </AddToCart>
          </Product>
        </Container>
      </Fragment>
    );
  }
}

ProductDetail.propTypes = {
  navigation: PropTypes.shape({ navigation: PropTypes.func }).isRequired,
  addToCart: PropTypes.func.isRequired,
  updateSubTotal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withNavigation(ProductDetail));
