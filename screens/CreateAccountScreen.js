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
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createaccountscreen}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <View style={[styles.loginbox, styles.loginboxPosition]}>
        <Image
          style={[styles.backdropBaseIcon, styles.loginboxPosition]}
          contentFit="cover"
          source={require("../assets/backdrop-base1.png")}
        />
        <Text style={[styles.alreadyHaveAnContainer, styles.loginNow3Typo]}>
          <Text style={styles.alreadyHaveAnAccount}>
            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.loginTypo}>Login Now</Text>
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.loginNow2Position}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Frame")}
        >
          <Text style={[styles.loginNow3, styles.loginTypo]}> Login Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.createaccountbutton, styles.emailboxSpaceBlock]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AccountSuccessful")}
        >
          <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.confirmpasswordbox}
          placeholder="Confirm Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#c8c8c8"
        />
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
        <TextInput
          style={[styles.fullnamebox, styles.emailboxShadowBox]}
          placeholder="Full Name"
          placeholderTextColor="#c8c8c8"
        />
        <Text style={styles.title}>Create Account</Text>
      </View>
      <Image
        style={styles.createaccountscreenChild}
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
  loginNow3Typo: {
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
  },
  loginTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProTextRegular,
  },
  emailboxSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  emailboxShadowBox: {
    left: 35,
    fontFamily: FontFamily.latoRegular,
    paddingHorizontal: 14,
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
    fontSize: FontSize.size_mini,
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
  alreadyHaveAn: {
    color: Color.colorDarkgray,
  },
  text: {
    color: Color.dark,
  },
  alreadyHaveAnAccount: {
    fontFamily: FontFamily.sFProTextRegular,
  },
  alreadyHaveAnContainer: {
    left: 69,
    top: 449,
    position: "absolute",
  },
  loginNow3: {
    color: Color.dark,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
  },
  loginNow2Position: {
    left: 69,
    top: 449,
    position: "absolute",
  },
  createAccount: {
    color: Color.white,
    width: 142,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
  },
  createaccountbutton: {
    height: "11.2%",
    width: "79.73%",
    top: "76%",
    right: "10.67%",
    bottom: "12.8%",
    left: "9.6%",
    borderRadius: Border.br_5xs,
    paddingHorizontal: 77,
    position: "absolute",
    backgroundColor: Color.colorMediumseagreen,
  },
  confirmpasswordbox: {
    top: 304,
    left: 37,
    fontFamily: FontFamily.latoRegular,
    paddingHorizontal: 14,
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
    paddingVertical: Padding.p_smi,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  passwordbox: {
    top: 234,
    paddingVertical: Padding.p_smi,
    justifyContent: "flex-end",
    flexDirection: "row",
    left: 35,
    alignItems: "center",
  },
  emailbox: {
    top: 164,
    paddingVertical: 0,
    justifyContent: "center",
  },
  fullnamebox: {
    top: 94,
    paddingVertical: 0,
    justifyContent: "center",
  },
  title: {
    marginLeft: -149.5,
    bottom: 432,
    left: "50%",
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 41,
    fontFamily: FontFamily.sFProDisplayBold,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    width: 237,
    height: 32,
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  loginbox: {
    top: 312,
    width: 375,
    height: 500,
  },
  createaccountscreenChild: {
    top: 72,
    left: 100,
    width: 175,
    height: 175,
    position: "absolute",
  },
  createaccountscreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorMediumseagreen,
  },
});

export default CreateAccountScreen;
