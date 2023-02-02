import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { APP_ICON, APP_PAGES } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const MessageNav = () => {
  const { setNavPage } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
      >
        <Text>{APP_ICON.BACK}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICON.CREATE}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  btn: {
    padding: 10
  }
});
