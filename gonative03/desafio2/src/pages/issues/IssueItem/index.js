import React from 'react';

import {
  View, TouchableOpacity, Image, Text, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <TouchableOpacity
    key={issue.id}
    style={styles.container}
    onPress={() => Linking.openURL(issue.html_url)}
  >
    <View style={styles.boxContainer}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {issue.title}
        </Text>
        <Text style={styles.login}>{issue.user.login}</Text>
      </View>
    </View>

    <View styles={styles.icon}>
      <Icon name="chevron-right" size={16} style={styles.icon} />
    </View>
  </TouchableOpacity>
);

export default IssueItem;
