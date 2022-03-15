import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ListCard from "../components/ListCard";
import SearchHome from "../components/SearchHome";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />
        <SearchHome />
        <ListCard onPress={(item) => navigation.navigate("Detail", { item })} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  body: {
    flex: 1,
  },
});
