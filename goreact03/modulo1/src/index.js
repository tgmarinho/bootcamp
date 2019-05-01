import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  // chamar api externa ou banco de dados, é executado quando o DOM real está pronto
  componentDidMount() {}

  // utilizando quando o component deixa de exisitir na aplicação, limpar listener de eventos
  componentWillUnmount() {}

  // antes de chamar o render novamente, esse método é executado, ele retorna true ou false, se for true o render reexecuta, se false não executa o render mas o estado pode ser alterado.
  // Usando quando quer performar um componente
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  // é executado depois da atualização, ele executa o render e depois executa esse método
  // executa depois que o render executou e tenho acesso as props e estatos anterioes
  componentDidUpdate(prevProps, prevState) {}

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rockeatseat: {this.state.counter}</h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
