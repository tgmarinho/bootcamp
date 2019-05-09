# Desafio 1

Crie uma aplicação do zero e configure o ESLint, EditorConfig, Reactotron, React DevTools e Babel Root Import. Assim que configurados, você deve reproduzir o layout abaixo utilizando FlexBox layout:

![Feed](https://raw.githubusercontent.com/Rocketseat/bootcamp-react-native-desafio-01/master/assets/feed.png)

Nesse projeto você desenvolverá um feed de posts estilo Facebook. Crie um layout tentando chegar o mais próximo possível da imagem acima.

## Regras

- O layout deve ser criado utilizando apenas os componentes `<View />`, `<Text />` e `<ScrollView />` do React Native;
- A caixa branca com o título “Aprendendo React Native” deve estar separada em outro componente chamado Post, o mesmo deve estar em outro arquivo chamado Post.js.
- Os posts devem estar armazenados no estado do componente principal da sua aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos devem ser renderizados em tela utilizando a função map para percorrê-los.

## Dicas

- Todas propriedades de estilo disponíveis para os componentes estão documentadas no link: https://github.com/RocketSeat/react-native-styling-cheat-sheet;
- Para alinhar todo conteúdo de um componente ao centro basta unir as propriedades `justifyContent: “center”` e `alignItems: “center”`;
- Para fazer que seja possível realizar scroll e ter uma barra de rolagem quando haverem muitos posts em tela é necessária a utilização do componente `<ScrollView \>` por volta da lista de posts, como por exemplo:

```
<ScrollView>
  <Post />
  <Post />
  <Post />
</ScrollView>
```

## Resultado Final

![App](/assets/resultado_final.png)

“Sucesso não é o resultado de um jogo, mas o destino de uma jornada”!
