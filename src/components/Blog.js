import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Blog = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
      {/* <EvilIcons name="trash" size={24} color="black" /> */}
      <AntDesign name="stepforward" size={24} color="black" />
      {/* <Feather name="trash-2" size={24} color="black" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Blog;
