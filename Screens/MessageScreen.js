import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import { COLORS } from "../Context/settings";
import MessageNav from "../Components/Nav/MessageNav";
import SearchInput from "../Components/Inputs/SearchInput";

const MessageScreen = () => {
  return (
    <View style={styles.outline}>
      <MessageNav />
      <SearchInput placeholder={"Search"} />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.BACKGROUND
  }
});
