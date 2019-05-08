import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    counter: 0
  };

  // executado quando a tela já foi renderizada
  // melhor opção para fazer chamadas em API externa ou colocar events listeners
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ text: "Texto Alterado" });
    // }, 3000);
  }

  // só consegue usar as variáveis do parametro, ele não tem acesso ao state pois é estático
  // é executado antes de montar a view e antes de cada atualização da view (chamar o render)
  // usado apenas se a variavel do state dependa de algum valor das propriedades
  // pouco utilizado
  static getDerivedStateFromProps(nextProps, prevState) {
    // return { text: nextProps.text };
  }

  // executado sempre q alterar a view e retorna um true/false para saber se vai chamar o render ou não (atualizar a view)
  // usado para resolver alguns problemas de performance para o render não ser chamado toda hora quando atualiza a view
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  // executa depois q atualizou e recebe o estado e props antes de ser atualizado
  componentDidUpdate(prevProps, prevState) {}

  // quando não está sendo mais renderizado a tela do component,
  // usado para desligar event listeners e remover qualquer coisa que esteja executando em background desnecessariamente
  componentWillMount() {}

  // OBS: Não pode alterar o stado com setState nos ciclos de shouldComponentUpdate, getDerivedStateFromProps, componentDidUpdate, componentWillMount

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleAddCounter} title="Add" />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  }
});
