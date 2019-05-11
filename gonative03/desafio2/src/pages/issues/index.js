import React, { Component } from 'react';
import {
  View, FlatList, Text, TouchableOpacity,
} from 'react-native';
import Header from '~/components/Header';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import IssueItem from './IssueItem';
import styles from './styles';

export default class Issues extends Component {
  state = {
    repository: '',
    loading: false,
    data: [],
    refreshing: false,
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    try {
      const dataStorage = await AsyncStorage.getItem('@GitIssues:respositories');
      const data = JSON.parse(dataStorage);
      console.tron.log(data);
      this.setState({ data });
    } catch (error) {
      console.tron.log('Ocorreu um erro');
    }
  };

  addRepository = async () => {
    try {
      const { repository, data } = this.state;

      this.setState({ loading: true, refreshing: false });

      const response = await api.get(`/repos/${repository}`);

      if (!data.some(repo => repo.id === response.data.id)) {
        const newValues = {
          id: response.data.id,
          login: response.data.name,
          name: response.data.owner.login,
          organization: response.data.organization.login || 'Não tem',
          avatar_url: response.data.owner.avatar_url || '',
          url: response.data.url,
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
      console.tron.log('Ocorreu um erro');
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem repository={item} />;

  render() {
    const {
      repository, loading, data, refreshing,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Issues" navigator={{ navigation: 'welcome' }} />
        <View style={styles.boxButtons}>
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            <Text style={styles.buttonTitle}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            <Text style={styles.buttonTitle}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            <Text style={styles.buttonTitle}>Fechadas</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadIssues}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
