import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ProjectsActions from '~/store/ducks/projects';
import MembersActions from '~/store/ducks/members';
import Button from '~/styles/components/Button';
import { Container, Project } from './styles';
import Modal from '~/components/Modal';
import Members from '../Members';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
    openMembersModal: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({ name: PropTypes.string }).isRequired,
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      projectModalOpen: PropTypes.bool.isRequired,
    }).isRequired,
    members: PropTypes.shape({
      membersModalOpen: PropTypes.bool,
    }).isRequired,
  };

  state = {
    newProject: '',
  };

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateProject = (e) => {
    e.preventDefault();
    const { createProjectRequest } = this.props;
    const { newProject } = this.state;
    createProjectRequest(newProject);
    this.setState({ newProject: '' });
  };

  render() {
    const {
      activeTeam,
      projects,
      openProjectModal,
      openMembersModal,
      closeProjectModal,
      members,
    } = this.props;
    const { newProject } = this.state;

    if (!activeTeam) return null;

    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={openProjectModal}>+ Novo</Button>
            <Button onClick={openMembersModal}>Membros</Button>
          </div>
        </header>
        {projects.data.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}

        {projects.projectModalOpen && (
          <Modal>
            <h1>Criar projeto</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>NOME</span>
              <input name="newProject" value={newProject} onChange={this.handleInputChange} />
              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button onClick={closeProjectModal} size="small" color="gray">
                Cancelar
              </Button>
            </form>
          </Modal>
        )}

        {members.membersModalOpen && <Members />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProjectsActions, ...MembersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
