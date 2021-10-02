import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Blog from "../components/Blog";
import { Context as BlogContext } from "../context/BlogContext";
// import jsonServer from "../api/jsonServer";
import { Ionicons } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { data, dispatch } = useContext(BlogContext);

  // const callServer = async () => {
  //   try {
  //     const response = await jsonServer.get(`/blogposts`);
  //     dispatch({ type: "fetch_posts", payload: response.data });
  //   } catch (error) {
  //     dispatch({});
  //   }
  // };

  // useEffect(() => {
  //   callServer();
  // }, []);

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
