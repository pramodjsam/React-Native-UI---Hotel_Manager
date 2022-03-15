import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../assets/themes";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.subTitle}>Find a Thousand</Text>
        <Text style={styles.title}>Homes For Sale & Rent</Text>
      </View>
      <View>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../assets/icons/bell.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    color: Colors.main,
  },
  title: {
    fontSize: 23,
    color: Colors.main,
    fontFamily: Fonts.Bold,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
