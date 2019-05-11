import React from 'react';

import {
  View, TouchableOpacity, Image, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <View style={styles.boxContainer}>
      <Image style={styles.avatar} source={{ uri: repository.avatar_url }} />

      <View style={styles.header}>
        <Text style={styles.login}>{repository.name}</Text>
        <Text style={styles.name}>{repository.login}</Text>
      </View>
    </View>

    <View styles={styles.icon}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="chevron-right" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

export default RepositoryItem;
