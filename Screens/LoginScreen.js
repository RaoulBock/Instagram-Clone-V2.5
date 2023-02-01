import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { COLORS } from "../Context/settings";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button/Button";

const LoginScreen = () => {
  return (
    <View style={styles.outline}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.grid}>
          <Image
            source={require("../Components/Icons/add.png")}
            style={styles.icon}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.main}>
        <Text style={styles.title}>Let's sign you in</Text>
        <Text></Text>
        <Input title={"Email"} placeholder={"Someone@something.com"} />
        <Input title={"Password"} placeholder={"••••••••••••"} />
        <View style={styles.btn}>
          <Text style={styles.text}>
            Don't have an account?{" "}
            <Text style={{ color: "white" }}>Register</Text>
          </Text>
          <Button title={"Login"} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.BACKGROUND,
  },
  title: {
    color: COLORS.TITLE_TEXT_COLOR,
    fontWeight: "800",
    fontSize: 30,
    marginTop: 20,
  },
  main: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  btn: {
    marginTop: 20,
  },
  text: {
    color: "#615f62",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "700",
  },
});
