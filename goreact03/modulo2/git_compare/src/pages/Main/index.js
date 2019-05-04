import React, { Component } from "react";

import moment from "moment";

import api from "../../services/api";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

const REPOS_LOCAL_HISTORY = "@GitCompare:repositories";

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: "",
    repositories: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({
      loading: false,
      repositories: await this.getLocalRepositories()
    });
  }

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { repositoryInput, repositories } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: "",
        repositories: [...repositories, repository]
      });

      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem(
        REPOS_LOCAL_HISTORY,
        JSON.stringify([...localRepositories, repository])
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  getLocalRepositories = async () =>
    JSON.parse(await localStorage.getItem(REPOS_LOCAL_HISTORY)) || [];

  handleDelete = async id => {
    const { repositories } = this.state;

    const updatedRepositories = repositories.filter(
      repository => repository.id !== id
    );

    this.setState({ repositories: updatedRepositories });

    await localStorage.setItem(
      REPOS_LOCAL_HISTORY,
      JSON.stringify(updatedRepositories)
    );
  };

  handleUpdate = async id => {
    const { repositories } = this.state;

    const repository = repositories.find(repo => repo.id === id);

    try {
      const { data } = await api.get(`/repos/${repository.full_name}`);

      data.last_commit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: "",
        repositories: repositories.map(repo =>
          repo.id === data.id ? data : repo
        )
      });

      await localStorage.setItem(
        REPOS_LOCAL_HISTORY,
        JSON.stringify(repositories)
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const {
      repositories,
      repositoryInput,
      repositoryError,
      loading
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}
          </button>
        </Form>

        <CompareList
          repositories={repositories}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </Container>
    );
  }
}
