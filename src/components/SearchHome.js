import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../assets/themes";

const SearchHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/search.png")}
        />
        <TextInput
          style={styles.text}
          underlineColorAndroid="transparent"
          placeholder="Search homes"
        />
      </View>
      <View style={styles.right}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/filter.png")}
        />
      </View>
    </View>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  left: {
    flexDirection: "row",
    backgroundColor: Colors.main2,
    alignItems: "center",
    flex: 1,
    padding: 14,
    borderRadius: 8,
    marginRight: 15,
  },
  text: {
    marginStart: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  right: {
    aspectRatio: 1,
    backgroundColor: Colors.main,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
  },
});
