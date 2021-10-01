import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import Blog from "../components/Blog";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { data, dispatch } = useContext(BlogContext);

  const renderPosts = ({ item }) => {
    return <Blog title={item.title} />;
  };

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button
        title="Add"
        onPress={() =>
          dispatch({
            type: "add_post",
            payload: `from indexScreen ${data.length + 1}`,
          })
        }
      />
      <FlatList
        data={data}
        renderItem={renderPosts}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
