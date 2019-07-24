import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import styles from './styles';
import TeamSwitcher from '~/components/TeamSwitcher';
import Projects from '~/components/Projects';
import Members from '~/components/Members';

class Main extends Component {
  static propTypes = {
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    activeTeam: null,
  };

  state = {
    leftOpen: false,
    rightOpen: false,
  };

  toogleMenu = (position, isOpen) => {
    this.setState({ [`${position}Open`]: isOpen });
  };

  render() {
    const { activeTeam } = this.props;
    const { leftOpen, rightOpen } = this.state;
    return (
      <View style={styles.backgroundWrapper}>
        <SideMenu
          isOpen={leftOpen}
          disableGestures
          onChange={isOpen => this.toogleMenu('left', isOpen)}
          openMenuOffset={70}
          menu={<TeamSwitcher />}
        >
          <SideMenu
            isOpen={rightOpen}
            disableGestures
            onChange={isOpen => this.toogleMenu('right', isOpen)}
            openMenuOffset={285}
            menuPosition="right"
            menu={<Members />}
          >
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity
                  hitSlop={{
                    top: 5,
                    bottom: 5,
                    left: 10,
                    right: 10,
                  }}
                  onPress={() => this.toogleMenu('left', true)}
                >
                  <Icon name="menu" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.teamTitle}>
                  {activeTeam ? activeTeam.name : 'Selecione um Time'}
                </Text>
                <TouchableOpacity
                  hitSlop={{
                    top: 5,
                    bottom: 5,
                    left: 10,
                    right: 10,
                  }}
                  onPress={() => this.toogleMenu('right', true)}
                >
                  <Icon name="group" size={24} color="#FFF" />
                </TouchableOpacity>
              </View>
              <Projects />
            </View>
          </SideMenu>
        </SideMenu>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
});

export default connect(
  mapStateToProps,
  null,
)(Main);
