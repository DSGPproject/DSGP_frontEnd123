import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginscreen}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={[styles.loginbox, styles.loginboxPosition]}>
        <Image
          style={[styles.backdropBaseIcon, styles.loginboxPosition]}
          contentFit="cover"
          source={require("../assets/backdrop-base1.png")}
        />
        <Text style={[styles.dontHaveAnContainer, styles.text1Typo]}>
          <Text style={styles.dontHaveAnAccount}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.registerNow1}>Register Now</Text>
          </Text>
        </Text>
        <TouchableOpacity
          style={[styles.registerNow2, styles.registerNow2Position]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("CreateAccountScreen")}
        >
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text
              style={styles.dontHaveAnAccount}
            >{`                                        `}</Text>
            <Text style={styles.registerNow1}>Register Now</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginbutton, styles.emailboxSpaceBlock]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("Forgotpassword")}
        >
          <Text style={[styles.forgotPassword1, styles.text3Typo]}>
            Forgot Password?
          </Text>
        </Pressable>
        <TextInput
          style={[styles.passwordbox, styles.emailboxShadowBox]}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#c8c8c8"
        />
        <TextInput
          style={[styles.emailbox, styles.emailboxShadowBox]}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#c8c8c8"
        />
        <Text style={[styles.text3, styles.text3Position]}>
          Please sign in to you account to continue
        </Text>
        <Text style={[styles.title, styles.text3Position]}>Login</Text>
      </View>
      <Image
        style={styles.loginscreenChild}
        contentFit="cover"
        source={require("../assets/group-19104.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginboxPosition: {
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
  },
  registerNow2Position: {
    top: 429,
    position: "absolute",
  },
  emailboxSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  text3Typo: {
    fontSize: FontSize.size_smi,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.sFProTextRegular,
  },
  emailboxShadowBox: {
    fontFamily: FontFamily.latoRegular,
    height: 50,
    width: 299,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 38,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text3Position: {
    textAlign: "left",
    letterSpacing: 0,
    left: "50%",
    marginLeft: -152.05,
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
    right: 5,
    bottom: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  dontHaveAn: {
    color: Color.colorDarkgray,
  },
  text: {
    color: Color.dark,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.sFProTextRegular,
  },
  registerNow1: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProTextRegular,
  },
  dontHaveAnContainer: {
    left: 68,
    top: 429,
    position: "absolute",
  },
  text1: {
    color: Color.dark,
  },
  registerNow2: {
    left: 67,
  },
  login: {
    color: Color.white,
    width: 50,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
  },
  loginbutton: {
    height: "11.2%",
    width: "78.66%",
    top: "72%",
    right: "11.34%",
    bottom: "16.8%",
    left: "10%",
    borderRadius: Border.br_5xs,
    alignItems: "flex-end",
    paddingHorizontal: 121,
    position: "absolute",
    backgroundColor: Color.colorMediumseagreen,
  },
  forgotPassword1: {
    textAlign: "right",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.sFProTextRegular,
  },
  forgotPassword: {
    left: 227,
    top: 274,
    position: "absolute",
  },
  passwordbox: {
    top: 211,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 13,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
  },
  emailbox: {
    top: 128,
    paddingHorizontal: 14,
    paddingVertical: 0,
    justifyContent: "center",
  },
  text3: {
    marginTop: -176,
    top: "50%",
    lineHeight: 20,
    width: 342,
    height: 26,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_smi,
  },
  title: {
    bottom: 432,
    fontSize: FontSize.size_13xl,
    lineHeight: 41,
    fontFamily: FontFamily.sFProDisplayBold,
    color: Color.colorBlack,
    display: "flex",
    width: 106,
    height: 32,
    alignItems: "center",
    fontWeight: "700",
  },
  loginbox: {
    top: 312,
    width: 380,
    height: 500,
  },
  loginscreenChild: {
    top: 72,
    left: 100,
    width: 175,
    height: 175,
    position: "absolute",
  },
  loginscreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorMediumseagreen,
  },
});

export default Frame;
