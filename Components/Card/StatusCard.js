import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const StatusCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default StatusCard;

const styles = StyleSheet.create({});
