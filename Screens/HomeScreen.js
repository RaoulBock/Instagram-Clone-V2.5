import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  RefreshControl
} from "react-native";
import React from "react";
import { COLORS, STATUS_DATA, POST_DATA } from "../Context/settings";
import HomeNav from "../Components/Nav/HomeNav";
import StatusCard from "../Components/Card/StatusCard";
import SinglePostCard from "../Components/Card/SinglePostCard";
import BottomNav from "../Components/Nav/BottomNav";

const HomeScreen = () => {
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
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HomeNav />
        <View style={{ marginVertical: 5, marginBottom: 20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {STATUS_DATA.map((e, i) => {
              return <StatusCard key={i} item={e} />;
            })}
          </ScrollView>
        </View>
        {POST_DATA.map((e, i) => {
          return <SinglePostCard key={i} item={e} />;
        })}
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.BACKGROUND
  }
});
