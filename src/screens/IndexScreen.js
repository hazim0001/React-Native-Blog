import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import Blog from "../components/Blog";
import { Context as BlogContext } from "../context/BlogContext";
import { Ionicons } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { data, dispatch } = useContext(BlogContext);

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
