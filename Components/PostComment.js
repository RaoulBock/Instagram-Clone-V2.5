import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PostComment = () => {
  const COMMENT_DATA = [
    {
      id: 1,
      name: "lana_smith",
      comment:
        "Let me know what you think; #cringey ? #awesome ? Sounds i make more? my Honor and Haven is my favorite thing."
    }
  ];

  return (
    <View style={styles.outline}>
      {COMMENT_DATA.map((e, i) => {
        return (
          <View key={i} style={styles.container}>
            <Text style={styles.title}>{e.name}</Text>
            <Text style={styles.text}>{e.comment}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default PostComment;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 4,
    marginHorizontal: 10
  },
  text: {
    color: "#707582",
    fontWeight: "500"
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 22
  }
});
