import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={TabNavigation} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
