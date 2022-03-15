import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";

const customFonts = {
  "PTSerif-Bold": require("./src/assets/fonts/PTSerif-Bold.ttf"),
  "PTSerif-Regular": require("./src/assets/fonts/PTSerif-Regular.ttf"),
};

const App = () => {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  }
};

export default App;
