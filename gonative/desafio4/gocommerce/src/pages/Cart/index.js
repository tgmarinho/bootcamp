import React, { Component, Fragment } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Content,
  Image,
  Box,
  ProductName,
  Brand,
  Price,
  Actions,
  Quantity,
  Delete,
  SubTotal,
  Total,
  Title,
} from './styles';

import Header from '~/components/Header';

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Header title="Carrinho" />

        <Container>
          <Content>
            <Image
              source={{
                uri:
                  'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
              }}
            />
            <Box>
              <ProductName>Camiseta Huasda Preta</ProductName>
              <Brand>Quiclosilver</Brand>
              <Price>50,00</Price>
            </Box>
            <Actions>
              <Quantity />
              <Delete onPress={() => {}}>
                <Icon name="remove" size={14} color="#999" />
              </Delete>
            </Actions>
          </Content>

          <SubTotal>
            <Title>Subtotal</Title>
            <Total>R$ 200,00</Total>
          </SubTotal>
        </Container>
      </Fragment>
    );
  }
}

export default Cart;
