import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const SinglePostCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.header}>
        <Image source={{ uri: item.image }} style={styles.profile_image} />
        <View>
          <Text>{item.username}</Text>
          <Text>{item.time}</Text>
        </View>
        <TouchableOpacity>
          <Text>{APP_ICON.ELLIPSIS}</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.post }} style={styles.post} />
    </View>
  );
};

export default SinglePostCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
