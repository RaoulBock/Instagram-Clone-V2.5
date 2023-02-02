import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const SearchInput = ({ placeholder, onChangeText, value, keyboardType }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.icon}>{APP_ICON.SEARCH}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        style={styles.input}
        placeholderTextColor={"#707582"}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#2e313b",
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#707582"
  },
  input: {
    paddingVertical: 10,
    color: "white",
    fontWeight: "600",
    fontSize: 18,

    width: 310
  },
  icon: {
    paddingHorizontal: 10
  }
});
