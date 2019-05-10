import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '~/styles';
import styles from './styles';

export default class Repositories extends Component {
  state = {
    repository: '',
    loading: false,
  };

  addRepository = () => {};

  render() {
    const { repository, loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" navigator={{ navigation: 'welcome' }} />
        <View style={styles.boxInput}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
            value={repository}
            onChangeText={text => this.setState({ repository: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Icon name="plus" size={16} style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
