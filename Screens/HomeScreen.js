import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import { COLORS } from "../Context/settings";
import HomeNav from "../Components/Nav/HomeNav";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.BACKGROUND,
  },
});
