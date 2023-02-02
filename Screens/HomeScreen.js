import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, STATUS_DATA, POST_DATA } from "../Context/settings";
import HomeNav from "../Components/Nav/HomeNav";
import StatusCard from "../Components/Card/StatusCard";
import SinglePostCard from "../Components/Card/SinglePostCard";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <View style={styles.outline}>
      <ScrollView>
        <HomeNav />
        <View style={{ marginVertical: 10, marginBottom: 20 }}>
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
