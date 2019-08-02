import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import MembersActions from '~/store/ducks/members';
import InviteMember from '~/components/InviteMember';
import Can from '~/components/Can';
import RoleUpdater from '~/components/RoleUpdater';

class Members extends Component {
  state = {
    isInviteModalOpen: false,
    isRoleModalOpen: false,
    memberEdit: null,
  };

  componentDidMount() {
    const { getMembersRequest } = this.props;
    getMembersRequest();
  }

  toggleInviteModalOpen = () => {
    this.setState({ isInviteModalOpen: true });
  };

  toggleInviteModalClosed = () => {
    this.setState({ isInviteModalOpen: false });
  };

  toggleRoleModalOpen = member => {
    this.setState({ isRoleModalOpen: true, memberEdit: member });
  };

  toggleRoleModalClosed = () => {
    this.setState({ isRoleModalOpen: false, memberEdit: null });
  };

  render() {
    const { members } = this.props;
    const { isInviteModalOpen, isRoleModalOpen, memberEdit } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>MEMBROS</Text>

        <FlatList
          style={styles.memberList}
          data={members.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.memberContainer}>
              <Text style={styles.memberName}>{item.user.name}</Text>
              <Can checkRole="administrator">
                <TouchableOpacity
                  onPress={() => this.toggleRoleModalOpen(item)}
                  hitSlop={{
                    top: 5,
                    bottom: 5,
                    left: 10,
                    right: 10,
                  }}
                >
                  <Icon name="settings" size={20} color="#b0b0b0" />
                </TouchableOpacity>
              </Can>
            </View>
          )}
          ListFooterComponent={() => (
            <Can checkPermission="invites_create">
              <TouchableOpacity style={styles.button} onPress={this.toggleInviteModalOpen}>
                <Text style={styles.buttonText}>Convidar</Text>
              </TouchableOpacity>
            </Can>
          )}
        />

        {memberEdit && (
          <RoleUpdater
            visible={isRoleModalOpen}
            onRequestClose={this.toggleRoleModalClosed}
            member={memberEdit}
          />
        )}
        <Can checkPermission="invites_create">
          <InviteMember visible={isInviteModalOpen} onRequestClose={this.toggleInviteModalClosed} />
        </Can>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
