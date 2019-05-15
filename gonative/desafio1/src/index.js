import "./config/ReactotronConfig";
import "./config/DevToolsConfig";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import Post from "./Post";

console.tron.log("Ok... its running");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE7777"
    // paddingTop: 20
  },
  header: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },
  titleApp: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  }
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: Math.random(),
        title: "Aprendendendo React Native",
        author: "Diego Schell Fernandes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleApp}>Go Native App</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
