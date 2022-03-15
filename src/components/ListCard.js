import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Fonts, Colors } from "../assets/themes";
import { Mocks } from "../assets/data";
import Item from "./Item";

const ListCard = ({ onPress }) => {
  const renderItem = ({ item }) => <Item onPress={onPress} item={item} />;

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleList}>Recommended</Text>
        <Text>View All</Text>
      </View>
      <FlatList
        data={Mocks}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  titleList: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: "#000",
  },
});
