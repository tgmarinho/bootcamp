import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Button from '~/styles/components/Button';
import { Container, Project } from './styles';

const Projects = ({ activeTeam }) => {
  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => {}}>+ Novo</Button>
          <Button onClick={() => {}}>Membros</Button>
        </div>
      </header>

      <Project>
        <p>aplicação com React Native</p>
      </Project>
      <Project>
        <p>aplicação com React Native</p>
      </Project>
      <Project>
        <p>aplicação com React Native</p>
      </Project>
      <Project>
        <p>aplicação com React Native</p>
      </Project>
      <Project>
        <p>aplicação com React Native</p>
      </Project>
      <Project>
        <p>aplicação com React Native</p>
      </Project>
      <Project>
        <p>aplicação com React Native</p>
      </Project>
    </Container>
  );
};

Projects.propTypes = {
  activeTeam: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
});

export default connect(
  mapStateToProps,
  null,
)(Projects);
