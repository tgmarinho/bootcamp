import React, { Component, Fragment } from 'react';
import { CartList, SubTotal,
  Total,
  Title } from './styles';

import CartItem from '~/components/CartItem'

import Header from '~/components/Header';

class Cart extends Component {
  renderCartItem = ({ item: product }) => <CartItem product={product} />;

  render() {
    return (
      <Fragment>
        <Header title="Carrinho" />
        <CartList
          data={[{name: 'thiago', id: 1}]}
          keyExtractor={product => product.id.toString()}
          renderItem={this.renderCartItem}
          ListEmptyComponent={this.renderEmptyCart}
        />
         <SubTotal>
          <Title>Subtotal</Title>
          <Total>R$ 200,00</Total>
        </SubTotal>
      </Fragment>
    );
  }
}

export default Cart;
