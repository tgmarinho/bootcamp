import React from "react";

import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 5
  },
  boxTitleAuthor: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4
  },
  author: {
    textAlign: "center",
    marginBottom: 12,
    color: "#999"
  },
  description: {
    marginTop: 12
  }
});

const Post = ({ post }) => (
  <View style={styles.container}>
    <View style={styles.boxTitleAuthor}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
    </View>
    <View>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  </View>
);

export default Post;
