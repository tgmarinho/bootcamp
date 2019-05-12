import React from 'react';
import { withNavigation } from 'react-navigation';

import {
  View, TouchableOpacity, Image, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Issues', {
      repository: repository.full_name,
      repositoryName: repository.login.toUpperCase(),
    })
    }
  >
    <View style={styles.boxContainer}>
      <Image style={styles.avatar} source={{ uri: repository.avatar_url }} />

      <View style={styles.header}>
        <Text style={styles.login}>{repository.login}</Text>
        <Text style={styles.name}>{repository.name}</Text>
      </View>
    </View>

    <View styles={styles.icon}>
      <Icon name="chevron-right" size={16} style={styles.icon} />
    </View>
  </TouchableOpacity>
);

export default withNavigation(RepositoryItem);
