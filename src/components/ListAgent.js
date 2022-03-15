import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../assets/themes";

const ListAgent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <Text style={styles.textAgent}>Agent</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>PH Housing</Text>
        <Text>Agent</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.iconBtn}>
          <Image
            style={styles.icon}
            source={require("../assets/icons/comment.png")}
          />
        </View>
        <View style={styles.iconBtn}>
          <Image
            style={styles.icon}
            source={require("../assets/icons/call.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListAgent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  con: {
    width: 45,
    height: 45,
    backgroundColor: Colors.main,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  textAgent: {
    color: "#FFF",
  },
  middle: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  right: {
    flexDirection: "row",
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginLeft: 10,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});
