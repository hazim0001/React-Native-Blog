import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Blog from "../components/Blog";
import { Context as BlogContext } from "../context/BlogContext";
import { Ionicons } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { data, fetchPosts } = useContext(BlogContext);

  useEffect(() => {
    //runs on the first time booting the app
    fetchPosts();
    // runs everytime we come back bacl to the index screen
    const listener = navigation.addListener("didFocus", () => {
      fetchPosts();
    });
    //runs when we get rid of the index screen completely
    return () => {
      listener.remove();
    };
  }, []);

  const renderPosts = ({ item }) => {
    return <Blog title={item.title} id={item.id} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderPosts}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Ionicons
          name="add-circle-outline"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default IndexScreen;
