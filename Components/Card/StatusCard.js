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
    paddingHorizontal: 6,
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  name: {
    color: COLORS.TITLE_TEXT_COLOR,

    marginTop: 10
  }
});
