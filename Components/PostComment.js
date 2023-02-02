import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PostComment = () => {
  const COMMENT_DATA = [
    {
      id: 1,
      name: "john_mart",
      comment:
        "Let me know what you think; #cringey ? #awesome ? Sounds i make more? my Honor and Haven is my favorite thing."
    }
  ];

  return (
    <View style={styles.outline}>
      {COMMENT_DATA.map((e, i) => {
        return (
          <View key={i} style={styles.container}>
            <Text style={styles.title}>"{e.comment}"</Text>
          </View>
        );
      })}
      <TouchableOpacity>
        <Text style={styles.text}>View all 40 comments</Text>
      </TouchableOpacity>
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
    fontWeight: "500",
    fontSize: 15
  }
});
