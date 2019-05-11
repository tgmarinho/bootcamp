import React, { Component } from 'react';
import {
  View, FlatList, Text, TouchableOpacity,
} from 'react-native';
import Header from '~/components/Header';
import api from '~/services/api';
import IssueItem from './IssueItem';
import styles from './styles';

class Issues extends Component {
  state = {
    loading: false,
    data: [],
    refreshing: false,
  };

  async componentDidMount() {
    try {
      const { navigation } = this.props;
      const repository = navigation.getParam('full_name');

      console.tron.log(repository);
      const response = await api.get(`/repos/${repository}/issues`);

      const data = {
        id: response.data.id,
        title: response.data.title,
        avatar: response.data.user.avatar_url,
        name: response.data.user.login,
        state: response.data.state,
        url: response.data.url,
      };

      this.setState({ data });
    } catch (error) {
      console.tron.log('ocorreu um erro');
    }
  }

  filterByAll = () => {
    this.setState({
      data: this.state.data.filter(issue => issue.state === 'all'),
    });
  };

  filterByOpen = () => {
    this.setState({
      data: this.state.data.filter(issue => issue.state === 'open'),
    });
  };

  filterByClosed = () => {
    this.setState({
      data: this.state.data.filter(issue => issue.state === 'closed'),
    });
  };

  renderListItem = ({ item }) => <IssueItem repository={item} />;

  render() {
    const {
      repository, loading, data, refreshing,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Issues" navigator={{ navigation: 'Repositories' }} />
        <View style={styles.boxButtons}>
          <TouchableOpacity style={styles.button} onPress={this.filterByAll}>
            <Text style={styles.buttonTitle}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.filterByOpen}>
            <Text style={styles.buttonTitle}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.filterByClosed}>
            <Text style={styles.buttonTitle}>Fechadas</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          refreshing={refreshing}
        />
      </View>
    );
  }
}

export default Issues;
