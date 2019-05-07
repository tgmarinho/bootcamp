import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';

const SideBar = ({ users }) => (
  <Container>
    <ul>
      {users
        && users.data.map(user => (
          <li key={user.id}>
            <div>
              <img src={user.avatar} alt={user.name} />
              <div>
                <strong>{user.name}</strong>
                <span>{user.login}</span>
              </div>
            </div>
            <div>
              <i className="fa fa-times-circle remove" />
              <i className="fa fa-chevron-right show" />
            </div>
          </li>
        ))}
    </ul>
  </Container>
);

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(SideBar);
