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
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
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
    flex: 1
  },
  modalView: {
    backgroundColor: "white",

    padding: 35,
    alignItems: "center",
    height: "50%",
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  }
});
