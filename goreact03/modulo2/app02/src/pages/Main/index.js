import React, { Component } from "react";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import moment from "moment";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositoryError: false,
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );
      // é uma boa prática formatar/processar fora do render dos components
      // data tem que chegar no render já formatada
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: [...this.state.repositories, repository]
      });
      this.setState({ repositoryError: false });
      this.setState({ repositoryInput: "" });
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
