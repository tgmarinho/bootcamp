import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import { data } from './data';

import './style.scss';

class App extends Component {
  state = {
    posts: data,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts && posts.map(post => <Post key={post._id} content={post} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
