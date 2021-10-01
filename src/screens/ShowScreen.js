import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import fetchBlog from "../hooks/fetchBlog";
import { Context as BlogContext } from "../context/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { data } = useContext(BlogContext);

  const blog_id = navigation.getParam("id");
  const { title, id } = data.find((blog) => blog.id == blog_id);
  // const blog = fetchBlog(blog_id);

  return (
    <View>
      <Text>{title}</Text>
      <Text>{id}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <MaterialIcons
          name="edit"
          size={35}
          color="black"
          style={{ marginRight: 15 }}
        />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});

export default ShowScreen;
