import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1 style={{ color: '#f00' }}>
          Hello Rockeatseat:
          {this.state.counter}
        </h1>
        <h1 className="title">
          Hello Rockeatseat:
          {this.state.counter}
        </h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
