import React, { Component } from 'react';
import {
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import RepositoryItem from './RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  state = {
    repository: '',
    loading: false,
    data: [
      {
        id: 80149262,
        name: 'Bla Bla',
        owner: {
          login: 'react-navigation',
          avatar_url: 'https://avatars2.githubusercontent.com/u/29647600?v=4',
        },
      },
      {
        id: 80149263,
        name: 'Bla Bla',
        owner: {
          login: 'react-navigation',
          avatar_url: 'https://avatars2.githubusercontent.com/u/29647600?v=4',
        },
      },
      {
        id: 80149265,
        name: 'Bla Bla',
        owner: {
          login: 'react-navigation',
          avatar_url: 'https://avatars2.githubusercontent.com/u/29647600?v=4',
        },
      },
    ],
    refreshing: false,
  };

  loadRepositories = () => {};

  addRepository = () => {};

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    const {
      repository, loading, data, refreshing,
    } = this.state;

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

        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadRepositories}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
