import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const Input = ({ placeholder, onChangeText, value, title, keyboardType }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholderTextColor={COLORS.TITLE_TEXT_COLOR}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 18,
    color: COLORS.TITLE_TEXT_COLOR,
    marginVertical: 20,
  },
  input: {
    backgroundColor: COLORS.BK_INPUT,
    padding: 15,
    borderRadius: 10,
    color: COLORS.TITLE_TEXT_COLOR,
    fontWeight: "600",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#2b2a31",
  },
});
