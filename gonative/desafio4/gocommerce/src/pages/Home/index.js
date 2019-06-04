import React from 'react';

import Header from '~/components/Header';
import {
  Container,
  Content,
  Product,
  Imagem,
  Title,
  Brand,
  Price,
  Categories,
  CategoryButton,
  CategoryLabel,
} from './styles';

const Home = () => (
  <Container>
    <Header title="GoCommerce" />
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
    <Content>
      <Product>
        <Imagem
          source={{
            uri:
              'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          }}
        />
        <Title>Camiseta Trok</Title>
        <Brand>Element</Brand>
        <Price>R$ 12,00</Price>
      </Product>
      <Product>
        <Imagem
          source={{
            uri:
              'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          }}
        />
        <Title>Camiseta Trok</Title>
        <Brand>Element</Brand>
        <Price>R$ 12,00</Price>
      </Product>
      <Product>
        <Imagem
          source={{
            uri:
              'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          }}
        />
        <Title>Camiseta Trok</Title>
        <Brand>Element</Brand>
        <Price>R$ 12,00</Price>
      </Product>
      <Product>
        <Imagem
          source={{
            uri:
              'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          }}
        />
        <Title>Camiseta Trok</Title>
        <Brand>Element</Brand>
        <Price>R$ 12,00</Price>
      </Product>
      <Product>
        <Imagem
          source={{
            uri:
              'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          }}
        />
        <Title>Camiseta Trok</Title>
        <Brand>Element</Brand>
        <Price>R$ 12,00</Price>
      </Product>
      <Product>
        <Imagem
          source={{
            uri:
              'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          }}
        />
        <Title>Camiseta Trok</Title>
        <Brand>Element</Brand>
        <Price>R$ 12,00</Price>
      </Product>
    </Content>
  </Container>
);

export default Home;
