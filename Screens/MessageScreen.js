import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl
} from "react-native";
import React from "react";
import { COLORS, MESSAGE_DATA } from "../Context/settings";
import MessageNav from "../Components/Nav/MessageNav";
import SearchInput from "../Components/Inputs/SearchInput";
import MessageCard from "../Components/Card/MessageCard";

const MessageScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <View style={styles.outline}>
      <MessageNav />
      <SearchInput placeholder={"Search"} />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={styles.text}>messages</Text>
          <Text style={[styles.text, styles.messages]}>
            12 un-read Messages
          </Text>
        </View>
        {MESSAGE_DATA.map((e, i) => {
          return <MessageCard key={i} item={e} />;
        })}
      </ScrollView>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.BACKGROUND
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: COLORS.TITLE_TEXT_COLOR,
    fontWeight: "700",
    fontSize: 28
  },
  messages: {
    fontWeight: "500",
    fontSize: 12
  }
});
