import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Input from "../components/Input";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data, dispatch } = useContext(BlogContext);

  const createPost = () => {
    dispatch({
      type: "add_post",
      payload: {
        title: title,
        content: content,
        id: `${data.length + 1}`,
      },
    });
    navigation.navigate("Index");
  };

  return (
    <View>
      <Text>Create Screen</Text>
      <Input
        title="Title"
        value={title}
        onChange={(newTitle) => setTitle(newTitle)}
      />
      <Input
        title="Content"
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <Button title="Save" onPress={() => createPost()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
