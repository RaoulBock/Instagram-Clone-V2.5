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
      <View style={{ marginVertical: 10, marginBottom: 20 }}>
        <FlatList
          data={STATUS_DATA}
          renderItem={({ item }) => <StatusCard item={item} />}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          initialNumToRender={5}
          onEndReachedThreshold={0.5}
          maxToRenderPerBatch={5}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>hi</Text>
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
