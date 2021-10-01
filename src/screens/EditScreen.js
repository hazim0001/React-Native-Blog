import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Input from "../components/Input";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const blog_id = navigation.getParam("id");
  const { data, dispatch } = useContext(BlogContext);
  const blog = data.find((blog) => blog.id == blog_id);

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  // console.log(id);
  const editPost = () => {
    dispatch({
      type: "edit_post",
      payload: {
        title: title,
        content: content,
        id: blog.id,
      },
    });
    navigation.pop();
  };
  return (
    <View>
      <Input
        title="Enter New Title"
        value={title}
        onChange={(newTitle) => setTitle(newTitle)}
      />
      <Input
        title="Enter New Content"
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <Button title="Save" onPress={() => editPost()} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
