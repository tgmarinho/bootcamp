import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import {
  Content,
  Image,
  Box,
  ProductName,
  Brand,
  Price,
  Actions,
  Quantity,
  Delete,
} from './styles';

const CartItem = ({
  product, deleteToCart, updateToCart, updateSubTotal,
}) => (
  <Content>
    <Image
      source={{
        uri: product.image,
      }}
    />
    <Box>
      <ProductName>{product.name}</ProductName>
      <Brand>{product.brand}</Brand>
      <Price>{`R$ ${product.price}`}</Price>
    </Box>
    <Actions>
      <Quantity
        onChangeText={(value) => {
          updateToCart(product.id, value);
          updateSubTotal();
        }}
      />
      <Delete
        onPress={() => {
          deleteToCart(product.id);
          updateSubTotal();
        }}
      >
        <Icon name="remove" size={14} color="#999" />
      </Delete>
    </Actions>
  </Content>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  deleteToCart: PropTypes.func.isRequired,
  updateToCart: PropTypes.func.isRequired,
  updateSubTotal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CartItem);
