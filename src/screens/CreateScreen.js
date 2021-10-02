import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Input from "../components/Input";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createPost } = useContext(BlogContext);

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
      <Button
        title="Save"
        onPress={() =>
          createPost(title, content, () => navigation.navigate("Index"))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
