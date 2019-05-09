import "~/config/ReactotronConfig";
import "~/config/DevToolsConfig";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Todo from "~/components/Todo";

console.tron.log("hello world");

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
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
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
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
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
