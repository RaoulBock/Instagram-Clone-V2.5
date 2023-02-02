import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import React from "react";
import { APP_ICON, COLORS } from "../../Context/settings";
import PostLikeSection from "../PostLikeSection";
import PostPeopleLike from "../PostPeopleLike";
import PostComment from "../PostComment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SinglePostCard = ({ item }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const TOP_OPTIONS = [
    {
      id: 1,
      name: "Share",
      icon: APP_ICON.SHARE
    },
    {
      id: 2,
      name: "Link",
      icon: APP_ICON.LINK
    },
    {
      id: 3,
      name: "Save",
      icon: APP_ICON.BOOKMARK
    },
    {
      id: 4,
      name: "Re-Post",
      icon: APP_ICON.RE_POST
    },
    {
      id: 5,
      name: "Qr code",
      icon: APP_ICON.QR_CODE
    }
  ];

  const MIDDLE_OPTION_DATA = [
    {
      id: 1,
      name: "Add to favorite",
      icon: APP_ICON.STAR
    },
    {
      id: 1,
      name: "Unfollow",
      icon: APP_ICON.UN_FRIEND
    }
  ];

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>{APP_ICON.ELLIPSIS}</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.post }} style={styles.post} />

      <PostLikeSection />
      <PostPeopleLike />
      <PostComment />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <View style={styles.modalView}>
            <View
              style={[
                styles.grid,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }
              ]}
            >
              {TOP_OPTIONS.map((e, i) => {
                return (
                  <View
                    key={i}
                    style={{ alignItems: "center", marginVertical: 20 }}
                  >
                    <TouchableOpacity style={styles.btn}>
                      <Text>{e.icon}</Text>
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.text,
                        { fontWeight: "500", fontSize: 14, marginTop: 10 }
                      ]}
                    >
                      {e.name}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View>
              {MIDDLE_OPTION_DATA.map((e, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={[styles.grid, { alignItems: "center" }]}
                  >
                    <Text>{e.icon}</Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          fontWeight: "500",
                          paddingHorizontal: 10,
                          marginVertical: 20
                        }
                      ]}
                    >
                      {e.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SinglePostCard;

const styles = StyleSheet.create({
  outline: {
    // borderTopWidth: 2,
    // borderTopColor: "#2c2e34",
    marginBottom: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: "center"
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

  centeredView: {
    flex: 1,
    zIndex: 1
  },
  modalView: {
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 10,
    height: "60%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.BACKGROUND,
    zIndex: 0,
    opacity: 0.8
  },
  btn: {
    borderWidth: 1,
    borderColor: COLORS.TITLE_TEXT_COLOR,
    padding: 15,
    borderRadius: 50
  }
});
