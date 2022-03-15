import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Fonts } from "../assets/themes";

const w = Dimensions.get("window").width;

const Item = ({ item, onPress }) => {
  return (
    <Pressable onPress={() => onPress(item)} style={styles.card}>
      <View style={{ position: "relative" }}>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
        <View style={styles.view1} />
        <View style={styles.view2} />
        <View style={styles.agentButton}>
          <Text style={styles.txtAgent}>{item.type}</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.priceCon}>
          <Text style={styles.price}>
            ${item.price}
            <Text style={{ fontWeight: "normal", fontSize: 14 }}>/year</Text>
          </Text>

          <View style={styles.starCon}>
            <Image source={require("../assets/icons/star.png")} />
            <Text style={styles.textStar}>{item.star}</Text>
          </View>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.adress}</Text>
      </View>
      <View style={styles.heartButton}>
        <Image source={require("../assets/icons/heart.png")} />
      </View>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#FFF",
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: w * 0.7,
    height: w * 0.5,
    borderRadius: 10,
    zIndex: 3,
  },

  agentButton: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: Colors.main,
    borderWidth: 2,
    borderColor: "#FFF",
    position: "absolute",
    left: 20,
    bottom: -10,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtAgent: {
    fontSize: 12,
    color: "#FFF",
  },
  view1: {
    position: "absolute",
    width: "90%",
    height: 30,
    backgroundColor: "#CADADC",
    zIndex: 2,
    borderRadius: 30,
    alignSelf: "center",
    bottom: -10,
  },
  view2: {
    position: "absolute",
    width: "80%",
    height: 30,
    backgroundColor: "#E5f1f1",
    borderRadius: 30,
    alignSelf: "center",
    bottom: -20,
  },
  bottom: {
    padding: 10,
    marginTop: 20,
  },
  priceCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "900",
    color: Colors.accent,
    fontSize: 20,
  },
  starCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStar: {
    fontSize: 18,
  },
  name: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: Colors.main,
    marginVertical: 10,
  },
  address: {
    color: Colors.gray,
  },
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 35,
    position: "absolute",
    backgroundColor: "#FFF",
    top: 20,
    right: 20,
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
