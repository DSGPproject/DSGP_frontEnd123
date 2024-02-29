const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import DiagnoseScreen from "./screens/DiagnoseScreen";
import SolutionScreen from "./screens/SolutionScreen";
import HomeScreen from "./screens/HomeScreen";
import Frame from "./screens/Frame";
import Forgotpassword from "./screens/Forgotpassword";
import OTPVerification from "./screens/OTPVerification";
import PasswordSuccessful from "./screens/PasswordSuccessful";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import AccountSuccessful from "./screens/AccountSuccessful";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.otf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
    "Lexend-ExtraBold": require("./assets/fonts/Lexend-ExtraBold.ttf"),
    "SFProText-Regular": require("./assets/fonts/SFProText-Regular.otf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Frame"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiagnoseScreen"
              component={DiagnoseScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SolutionScreen"
              component={SolutionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgotpassword"
              component={Forgotpassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordSuccessful"
              component={PasswordSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountScreen"
              component={CreateAccountScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSuccessful"
              component={AccountSuccessful}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
