import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    usuario: "thiago",
    todos: [{ id: 0, text: "Fazer café" }, { id: 1, text: "Estudar gonative" }]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Estudar JS" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>Oi</Text>
        </View>
      </View>
    );
  }
}

/**
 * justifyContent acompanha a orientação do flexDirection para alinhar o conteudo
 * se flexDirection='row' então o alinhamento é horizontal
 * se flexDirection='column' então o alinhamento é vertical
 */

/**
 * alignItems é ao contrário do justifyContent ( é o inverso )
 *  se flexDirection='row' então o alinhamento é vertical
 *  se flexDirection='column' então o alinhamento é horizontal
 *
 * o alignItems só funciona para uma linha de conteudo (por isso deixei só 3 box no exemplo, para caber tudo em uma linha)
 */

/**
 * Quando tiver mais de uma linha, usar o alignContent
 *
 */

/**
 * No RN não tem herança de estilos
 *
 */

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupar todo espaço em tela possível
    backgroundColor: "#333",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around"
  },
  box: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: "#F00",
    color: "#FFF", // Não tem herança,  o text de dentro do view não consegue setar branco no Text
    // paddingHorizontal: 100
    // marginVertical: 100
    transform: [{ rotateZ: "20deg" }]
  },
  boxText: {
    color: "#FFF"
  }
});
