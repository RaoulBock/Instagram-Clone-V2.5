import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const MessageCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50
  },
  text: {
    color: "#6a6e7b",
    fontWeight: "700",
    fontSize: 20
  },
  message: {
    width: 250,
    color: "#6a6e7b",
    marginTop: 10
  }
});
