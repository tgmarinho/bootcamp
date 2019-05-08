import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

export default class Todo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
