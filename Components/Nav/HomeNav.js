import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const HomeNav = () => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICON.CAMERA}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICON.MESSAGE}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btn: {
    padding: 10,
  },
});
