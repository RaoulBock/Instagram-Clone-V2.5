import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const BottomNav = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      icon: APP_ICON.HOME
    },
    {
      id: 2,
      name: "Search",
      icon: APP_ICON.SEARCH
    },
    {
      id: 3,
      name: "Notification",
      icon: APP_ICON.NOTIFICATION
    },
    {
      id: 4,
      name: "user",
      icon: APP_ICON.USER
    }
  ];

  return (
    <View style={styles.outline}>
      {menu.map((e, i) => {
        return (
          <TouchableOpacity key={i} style={styles.btn}>
            <Text>{e.icon}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btn: {
    padding: 10
  }
});
