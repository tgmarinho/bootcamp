import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  CartList, SubTotal, Total, Title, EmptyCartContainer, EmptyCartText,
} from './styles';

import CartItem from '~/components/CartItem';

import Header from '~/components/Header';

class Cart extends Component {
  renderCartItem = ({ item: product }) => <CartItem product={product} />;

  renderEmptyCart = () => (
    <EmptyCartContainer>
      <Icon name="shopping-cart" size={64} color="#e79799" />
      <EmptyCartText>Ops! Carrinho vazio =/</EmptyCartText>
    </EmptyCartContainer>
  );

  render() {
    const { products, subTotal } = this.props;

    return (
      <Fragment>
        <Header title="Carrinho" />

        <CartList
          data={products}
          keyExtractor={product => product.id.toString()}
          renderItem={this.renderCartItem}
          ListEmptyComponent={this.renderEmptyCart}
        />
        <SubTotal>
          <Title>Subtotal</Title>
          <Total>{`R$ ${subTotal.toFixed(2)}`}</Total>
        </SubTotal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.products,
  subTotal: state.cart.subTotal,
});

export default connect(
  mapStateToProps,
  null,
)(Cart);
