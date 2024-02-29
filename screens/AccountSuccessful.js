import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const AccountSuccessful = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountsuccessful}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg2.png")}
      />
      <View style={[styles.loginbox, styles.loginboxPosition]}>
        <Image
          style={[styles.backdropBaseIcon, styles.loginboxPosition]}
          contentFit="cover"
          source={require("../assets/backdrop-base1.png")}
        />
        <TouchableOpacity
          style={styles.continuebutton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Frame")}
        >
          <Text style={styles.continue}>CONTINUE</Text>
        </TouchableOpacity>
        <Text style={[styles.text, styles.textPosition]}>
          Your account has been created.
        </Text>
        <Text style={[styles.title, styles.textPosition]}>{`Success! `}</Text>
      </View>
      <Image
        style={styles.accountsuccessfulChild}
        contentFit="cover"
        source={require("../assets/group-19104.png")}
      />
      <Image
        style={styles.successmarkIcon}
        contentFit="cover"
        source={require("../assets/successmark.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginboxPosition: {
    left: 0,
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  bgIcon: {
    top: -270,
    left: -244,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  backdropBaseIcon: {
    top: 0,
    right: 0,
    bottom: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  continue: {
    fontSize: FontSize.size_mini,
    color: Color.white,
    width: 121,
    textAlign: "center",
    fontFamily: FontFamily.sFProTextRegular,
  },
  continuebutton: {
    height: "11.2%",
    width: "79.73%",
    top: "72%",
    right: "10.13%",
    bottom: "16.8%",
    left: "10.13%",
    borderRadius: Border.br_5xs,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_67xl,
    paddingVertical: Padding.p_lg,
    position: "absolute",
    backgroundColor: Color.colorMediumseagreen,
  },
  text: {
    marginTop: 12,
    marginLeft: -170.5,
    top: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorDarkgray,
    width: 342,
    height: 26,
    fontFamily: FontFamily.sFProTextRegular,
    left: "50%",
  },
  title: {
    marginLeft: -127.5,
    bottom: 244,
    fontSize: FontSize.size_8xl,
    letterSpacing: 0,
    lineHeight: 41,
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplayBold,
    color: Color.colorBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 256,
    height: 32,
  },
  loginbox: {
    top: 312,
    width: 375,
    height: 500,
  },
  accountsuccessfulChild: {
    top: 72,
    left: 100,
    width: 175,
    height: 175,
    position: "absolute",
  },
  successmarkIcon: {
    top: 386,
    left: 123,
    width: 130,
    height: 130,
    position: "absolute",
    overflow: "hidden",
  },
  accountsuccessful: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorMediumseagreen,
  },
});

export default AccountSuccessful;
