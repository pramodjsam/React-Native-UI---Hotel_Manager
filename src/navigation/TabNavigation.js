import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Comment from "../screens/Comment";
import Heart from "../screens/Heart";
import User from "../screens/User";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "../assets/themes";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.main,
          borderRadius: 30,
          height: 60,
          //   marginBottom: 5,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.btn}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={"#FFF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Comment"
        component={Comment}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.btn}>
              <Ionicons
                name={focused ? "mail" : "mail-outline"}
                size={size}
                color={"#FFF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Heart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.btn}>
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={size}
                color={"#FFF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.btn}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={"#FFF"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  //   btn: {
  //     padding: 20,
  //   },
});

export default TabNavigation;
