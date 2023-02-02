import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";

const PostLikeSection = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  return (
    <View style={[styles.grid, styles.sectionGrid]}>
      <View style={styles.grid}>
        {isLiked ? (
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Ionicons name={"ios-heart"} style={styles.isLiked} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Ionicons name={"ios-heart-outline"} style={styles.icon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Ionicons
            name={"ios-chatbubble-outline"}
            style={[styles.icon, { marginHorizontal: 20, fontSize: 23 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name={"ios-share-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {isSaved ? (
        <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
          <Ionicons name={"ios-bookmark"} style={styles.isSaved} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
          <Ionicons name={"ios-bookmark-outline"} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostLikeSection;

const styles = StyleSheet.create({
  sectionGrid: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10
  },
  icon: {
    color: "white",
    fontWeight: 700,
    fontSize: 23
  },
  isLiked: {
    color: "#f66",
    fontWeight: 700,
    fontSize: 23
  },
  isSaved: { color: "#f66", fontWeight: 700, fontSize: 23 },
  grid: {
    flexDirection: "row"
  }
});
