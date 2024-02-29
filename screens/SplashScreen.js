import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashscreen}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={styles.splashscreenChild}
        contentFit="cover"
        source={require("../assets/group-19104.png")}
      />
      <Text style={styles.greenguard}>GreenGuard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIcon: {
    top: -270,
    left: -244,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  splashscreenChild: {
    top: 266,
    left: 100,
    width: 175,
    height: 175,
    position: "absolute",
  },
  greenguard: {
    top: 460,
    left: 76,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplayBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  splashscreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SplashScreen;
