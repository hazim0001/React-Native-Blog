import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const Input = ({ title, value, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={{ fontSize: 23, fontWeight: "bold" }}>Enter {title}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    fontSize: 23,
    borderColor: "#d5d5d5",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  inputContainer: {
    marginHorizontal: 20,
    height: 50,
    marginVertical: 20,
  },
});

export default Input;
