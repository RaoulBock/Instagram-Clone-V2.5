import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { COLORS, STATUS_DATA } from "../Context/settings";
import HomeNav from "../Components/Nav/HomeNav";
import StatusCard from "../Components/Card/StatusCard";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <View style={styles.outline}>
      <HomeNav />
      <FlatList
        data={STATUS_DATA}
        renderItem={({ item }) => <StatusCard item={item} />}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        initialNumToRender={5}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={5}
        horizontal
        onEndReached={() => {
          setIsLoading(true);
          // fetch more data
          setIsLoading(false);
        }}
        ListFooterComponent={
          isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : null
        }
      />
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
