import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";
import { withNavigation } from "react-navigation";

const Blog = ({ title, id, navigation }) => {
  const { deletePost } = useContext(BlogContext);

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.navigate("Show", { id: id })}>
        <Text style={styles.blogText}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deletePost(id)}>
        <EvilIcons name="trash" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  blogText: {
    fontSize: 20,
  },
});

export default withNavigation(Blog);
