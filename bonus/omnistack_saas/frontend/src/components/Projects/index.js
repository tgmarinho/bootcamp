import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ProjectsActions from '~/store/ducks/projects';
import Button from '~/styles/components/Button';
import { Container, Project } from './styles';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({ name: PropTypes.string }).isRequired,
    projects: PropTypes.shape({
      data: PropTypes.arrayOf({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  render() {
    const { activeTeam, projects } = this.props;
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
        {projects.data.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
