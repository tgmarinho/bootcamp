import React, { Component } from 'react';
import {
  View, FlatList, TextInput, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import RepositoryItem from './RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  state = {
    repository: '',
    loading: false,
    data: [],
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    try {
      const dataStorage = (await AsyncStorage.getItem('@GitIssues:respositories')) || [];

      if (dataStorage.length > 0) {
        const data = JSON.parse(dataStorage);
        this.setState({ data });
      }
    } catch (error) {
      console.tron.log('Ocorreu um erro');
    }
  };

  addRepository = async () => {
    try {
      const { data, repository } = this.state;

      this.setState({ loading: true, refreshing: false });

      const response = await api.get(`/repos/${repository}`);
      if (!data.some(repo => repo.id === response.data.id)) {
        const newValues = {
          id: response.data.id,
          login: response.data.name,
          name: response.data.owner.login,
          organization: response.data.organization.login || 'Não tem',
          avatar_url: response.data.owner.avatar_url || '',
          full_name: response.data.full_name,
        };

        await AsyncStorage.setItem(
          '@GitIssues:respositories',
          JSON.stringify([...data, newValues]),
        );

        this.setState({
          data: [...data, newValues],
          repository: '',
        });
      }
    } catch (error) {
      console.tron.log('Ocorreu um erro', error);
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    const {
      repository, loading, data, refreshing,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
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
