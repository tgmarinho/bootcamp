import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, FlatList, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import Header from '~/components/Header';
import api from '~/services/api';
import IssueItem from './IssueItem';
import styles from './styles';

class Issues extends Component {
  state = {
    loading: false,
    data: [],
    activeFilter: 'all',
    refreshing: false,
    error: null,
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    try {
      this.setState({ loading: true, refreshing: true });

      const { navigation } = this.props;
      const repository = navigation.getParam('repository');

      const { data } = await api.get(`/repos/${repository}/issues`);

      this.setState({ data });
      this.setState({ error: null });
    } catch (error) {
      console.tron.log('ocorreu um erro', error);
      this.setState({ error: 'Ocorreu um erro' });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { refreshing, data, error } = this.state;

    if (error) {
      return <Text style={styles.error}>{error}</Text>;
    }

    return !data.length ? (
      <Text style={styles.empty}>Nenhuma issue encontrada</Text>
    ) : (
      <FlatList
        data={data}
        onRefresh={this.loadIssues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        refreshing={refreshing}
      />
    );
  };

  changeFilter = async (value) => {
    this.setState({ activeFilter: value, loading: true });

    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    try {
      const { data } = await api.get(`/repos/${repository}/issues?state=${value}`);
      console.tron.log(data);
      this.setState({ data, error: null });
    } catch (error) {
      this.setState({ error: 'Erro ao recuperar as Issues' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, activeFilter } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title={this.props.navigation.getParam('repositoryName')}
          navigator={{ navigation: 'Repositories' }}
        />
        <View style={styles.boxButtons}>
          <TouchableOpacity style={styles.button} onPress={() => this.changeFilter('all')}>
            <Text style={[styles.buttonTitle, activeFilter === 'all' && styles.activeFilter]}>
              Todas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.changeFilter('open')}>
            <Text style={[styles.buttonTitle, activeFilter === 'open' && styles.activeFilter]}>
              Abertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.changeFilter('closed')}>
            <Text style={[styles.buttonTitle, activeFilter === 'closed' && styles.activeFilter]}>
              Fechadas
            </Text>
          </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}

export default withNavigation(Issues);
