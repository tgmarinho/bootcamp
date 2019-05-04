import React from "react";
import PropTypes from "prop-types";

import { Container, Repository } from "./styles";

const CompareList = ({ repositories, handleDelete, handleUpdate }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <nav>
          <i
            className="fa fa-refresh"
            onClick={() =>
              handleUpdate(`${repository.owner.login}/${repository.name}`)
            }
          />
          <i
            className="fa fa-trash"
            onClick={() => handleDelete(repository.id)}
          />
        </nav>

        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default CompareList;
