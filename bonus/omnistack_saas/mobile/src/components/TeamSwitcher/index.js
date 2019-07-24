import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import TeamsActions from '~/store/ducks/teams';

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { getTeamsRequest } = this.props;
    getTeamsRequest();
  }

  render() {
    const { teams, selectTeam } = this.props;

    return (
      <View style={styles.container}>
        {teams.data.map(team => (
          <TouchableOpacity
            key={team.id}
            style={styles.teamContainer}
            onPress={() => selectTeam(team)}
          >
            <Image
              style={styles.teamAvatar}
              source={{
                uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${
                  team.name
                }`,
              }}
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.newTeam} onPress={() => {}}>
          <Icon name="add" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
});

const mapDispatchToProps = dispatch => bindActionCreators(TeamsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSwitcher);
