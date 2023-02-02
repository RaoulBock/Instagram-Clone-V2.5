import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../Context/settings";

const PostPeopleLike = () => {
  const PEOPLE_LIST = [
    "https://pyxis.nymag.com/v1/imgs/e0a/79c/5671d6e6089515f706e9b2288d41d9e824-you-people.1x.rsquare.w1400.jpg",
    "https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg",
    "https://helpfulprofessor.com/wp-content/uploads/2022/10/French-woman-e1667050422125-1024x683.jpg",
    "https://media.istockphoto.com/id/1320651997/photo/young-woman-close-up-isolated-studio-portrait.jpg"
  ];
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <View style={{ flexDirection: "row" }}>
          {PEOPLE_LIST.map((e, i) => {
            return <Image key={i} source={{ uri: e }} style={styles.image} />;
          })}
        </View>
        <Text style={styles.text}>
          Liked <Text style={styles.title}>yanna_summer</Text> and{" "}
          <Text style={styles.title}>12k more</Text>
        </Text>
      </View>
    </View>
  );
};

export default PostPeopleLike;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 4,
    marginHorizontal: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: -20,
    borderWidth: 3,
    borderColor: COLORS.BACKGROUND
  },
  text: {
    color: "#707582",
    fontWeight: "700"
  },
  title: {
    color: "white",
    fontWeight: "700"
  }
});
