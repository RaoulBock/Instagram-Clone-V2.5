import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import React from "react";
import { APP_ICON, COLORS } from "../../Context/settings";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SinglePostCard = ({ item }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <View style={styles.outline}>
      <View style={styles.header}>
        <View style={styles.grid}>
          <Image
            source={{ uri: item.profile_image }}
            style={styles.profile_image}
          />
          <View style={styles.userInfo}>
            <Text style={styles.text}>{item.username}</Text>
            <Text style={[styles.text, styles.time]}>{item.time}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text>{APP_ICON.ELLIPSIS}</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.post }} style={styles.post} />

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
              style={[styles.icon, { marginHorizontal: 20, fontSize: 30 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={"ios-share-outline"} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name={"ios-bookmark-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SinglePostCard;

const styles = StyleSheet.create({
  outline: {
    // borderTopWidth: 2,
    // borderTopColor: "#2c2e34",
    marginTop: 7
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    marginVertical: 20
  },
  post: {
    width: windowWidth,
    height: 300,
    resizeMode: "stretch"
  },
  profile_image: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  grid: {
    flexDirection: "row"
  },
  userInfo: {
    paddingHorizontal: 10
  },
  text: {
    color: COLORS.TITLE_TEXT_COLOR,
    fontWeight: "700",
    fontSize: 20
  },
  time: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6d7e87"
  },
  sectionGrid: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10
  },
  icon: {
    color: "white",
    fontWeight: 700,
    fontSize: 32
  },
  isLiked: {
    color: "#f66",
    fontWeight: 700,
    fontSize: 32
  }
});
