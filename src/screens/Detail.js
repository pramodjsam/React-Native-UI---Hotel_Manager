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
import ListAgent from "../components/ListAgent";
import ListButton from "../components/ListButton";

const w = Dimensions.get("window").width;

const Detail = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={require("../assets/icons/back.png")} />
        </Pressable>
        <View style={styles.cardPros}>
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.adress}</Text>
            <View style={styles.revCon}>
              <View style={styles.starCon}>
                <Image source={require("../assets/icons/star.png")} />
                <Text style={styles.textStar}>{item.star}</Text>
              </View>
              <View style={styles.heartButton}>
                <Image source={require("../assets/icons/heart.png")} />
              </View>
            </View>
            <View style={styles.view1} />
            <View style={styles.view2} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Listing Agent</Text>
        <ListAgent />
      </View>
      <View style={[styles.body, { marginTop: 0 }]}>
        <Text style={styles.title}>Specification</Text>
        <View style={styles.specContainer}>
          <ListButton
            num={3}
            title="Bed rooms"
            icon={require("../assets/icons/badroom.png")}
          />
          <ListButton
            num={2}
            title="Bath rooms"
            icon={require("../assets/icons/bathroom.png")}
          />
          <ListButton
            num={200}
            title="Square Fit"
            icon={require("../assets/icons/fit.png")}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.price}>
          ${item.price}
          <Text style={{ fontWeight: "normal", fontSize: 14 }}>/year</Text>
        </Text>
        <Pressable style={styles.btn}>
          <Text style={styles.txtBtn}>Book Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    width: w,
    height: w * 0.85,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 2,
  },
  cardPros: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: -80,
    // zIndex: 999,
  },
  card: {
    backgroundColor: Colors.main2,
    padding: 20,
    shadowColor: Colors.main,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    zIndex: 50,
  },
  name: {
    fontFamily: Fonts.Bold,
    fontSize: 25,
    color: Colors.main,
    marginTop: 10,
  },
  address: {
    color: Colors.gray,
    marginVertical: 10,
  },
  revCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  starCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStar: {
    fontSize: 18,
  },
  heartButton: {
    backgroundColor: "#FFF",
    height: 40,
    width: 40,
    borderRadius: 35,
    shadowColor: Colors.main,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // view1: {
  //   backgroundColor: "#CADADC",
  //   height: 30,
  //   width: "90%",
  //   alignSelf: "center",
  //   position: "absolute",
  //   bottom: -10,
  //   zIndex: 1,
  //   borderRadius: 30,
  // },
  // view2: {
  //   position: "absolute",
  //   width: "80%",
  //   height: 30,
  //   backgroundColor: "#E5f1f1",
  //   alignSelf: "center",
  //   bottom: -20,
  //   borderRadius: 30,
  //   zIndex: 2,
  // },
  body: {
    marginTop: 80,
    padding: 20,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: Fonts.Bold,
  },
  specContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  price: {
    fontWeight: "900",
    color: Colors.accent,
    fontSize: 20,
  },
  btn: {
    backgroundColor: Colors.main,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  txtBtn: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
