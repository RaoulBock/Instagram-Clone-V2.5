import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: COLORS.BK_BUTTON,

    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 18,
    color: "#fff",
  },
});
