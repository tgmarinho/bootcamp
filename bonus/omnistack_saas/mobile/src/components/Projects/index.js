import React, { Component } from 'react';

import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProjectActions from '~/store/ducks/projects';

import styles from './styles';

class Projects extends Component {
  componentDidMount() {
    console.tron.log(this.props);
    const { getProjectsRequest, activeTeam } = this.props;
    if (activeTeam) {
      getProjectsRequest();
    }
  }

  render() {
    const { projects, activeTeam } = this.props;

    console.tron.log(projects, activeTeam);

    if (!activeTeam) return null;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.projectsList}
          data={projects.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>{item.title}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.newProjectButton} onPress={() => {}}>
          <Icon name="add" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  activeTeam: state.teams.active,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
