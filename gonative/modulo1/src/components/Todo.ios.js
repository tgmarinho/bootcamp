import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet, Platform } from "react-native";

const Todo = ({ title }) => (
  <View>
    {Platform.OS === "ios" ? (
      <Text style={styles.text}>Opa IOS AQUI</Text>
    ) : (
      <Text>Provavelmente Android</Text>
    )}
  </View>
);

Todo.defaultProps = {
  title: "Todo padrao"
};

Todo.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: "bold"
      },
      anroid: {
        fontSize: 24
      }
    })
  }
});

export default Todo;
