import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const StatusCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  outline: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name: {
    color: COLORS.TITLE_TEXT_COLOR,
    fontWeight: "600",
    marginTop: 10,
  },
});
