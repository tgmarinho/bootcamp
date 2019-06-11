import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import {
  CartList, SubTotal, Total, Title,
} from './styles';

import CartItem from '~/components/CartItem';

import Header from '~/components/Header';

class Cart extends Component {
  renderCartItem = ({ item: product }) => <CartItem product={product} />;

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
          <Total>{subTotal}</Total>
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
