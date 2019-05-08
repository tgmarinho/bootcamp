import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as UserActions } from '../../store/ducks/users';

const SideBar = ({ users, removeUser }) => {
  console.log(users);
  return (
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
                <i className="fa fa-times-circle remove" onClick={() => removeUser(user.id)} />
                <i className="fa fa-chevron-right show" />
              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
