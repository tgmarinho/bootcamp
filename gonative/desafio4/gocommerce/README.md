# Desafio 4

Nesse desafio você irá construir uma aplicação com interface de e-commerce, o usuário poderá adicionar produtos ao carrinho e no final exibir o valor total do pedido.

Além disso, os dados de produtos e categorias virão de uma API com json-server (o arquivo da API está na pasta do desafio).

A interface da aplicação será como a seguinte:

![Telas](https://github.com/Rocketseat/bootcamp-react-native-desafio-04/blob/master/assets/screens.png)

## Regras

- Os dados devem ser consumidos do JSON Server utilizando o arquivo server.json em anexo;
- O usuário deve poder adicionar produtos, alterar sua quantidade e removê-lo do carrinho;
- O valor do carrinho deve ser calculado pela soma dos preços x quantidades;
- A barra de categorias deve fornecer scroll horizontal para ver todas categorias;
- As requisições assíncronas devem utilizar Redux Saga;
- Você deve exibir sinais de loading enquanto a requisição está sendo feita na lista de produtos/categorias inicial;

## URL's

- http://localhost:3000/categories (Busca categorias)
- http://localhost:3000/category_products/1 (Busca produtos pelo ID da categoria)
- http://localhost:3000/products/1 (Busca detalhes do produto pelo ID)

## Video com a solução (https://youtu.be/HUKkTXnpKEs):

[![Veja o vídeo](https://github.com/tgmarinho/bootcamp/tree/master/gonative/desafio4/gocommerce/gommerce.png)](https://youtu.be/HUKkTXnpKEs)

