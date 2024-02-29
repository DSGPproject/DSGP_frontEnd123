import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily, Padding } from "../GlobalStyles";

const Forgotpassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotpassword}>
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={[styles.bgIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/bg3.png")}
        />
        <View style={[styles.frame1, styles.backLayout]}>
          <TouchableOpacity
            style={[styles.back, styles.backLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Frame")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.frame2}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.frame3}>
          <View style={styles.loginbox}>
            <Image
              style={styles.backdropBaseIcon}
              contentFit="cover"
              source={require("../assets/backdrop-base1.png")}
            />
            <Text
              style={[styles.rememberPasswordLoginContainer, styles.loginTypo]}
            >
              <Text style={styles.rememberPassword}>
                <Text style={styles.rememberPassword1}>Remember Password?</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
              <Text style={styles.text}>
                <Text style={styles.loginNow1}>Login Now</Text>
              </Text>
            </Text>
            <TouchableOpacity
              style={[styles.loginNow2, styles.loginPosition]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("Frame")}
            >
              <Text style={[styles.loginNow3, styles.loginTypo]}>
                {" "}
                Login Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sendcodebutton, styles.emailboxSpaceBlock]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("OTPVerification")}
            >
              <Text style={styles.sendCode}>SEND CODE</Text>
            </TouchableOpacity>
            <TextInput
              style={[styles.emailbox, styles.emailboxSpaceBlock]}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#c8c8c8"
            />
            <Text
              style={[styles.text1, styles.text1Position]}
            >{`Don't worry! It occurs. Please enter the email
address linked with your account.`}</Text>
            <Text style={[styles.title, styles.text1Position]}>
              Forgot Password
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 976,
    width: 1032,
    position: "absolute",
  },
  backLayout: {
    height: 41,
    position: "absolute",
  },
  loginTypo: {
    lineHeight: 18,
    letterSpacing: 0.1,
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  loginPosition: {
    top: 429,
    position: "absolute",
  },
  emailboxSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
    position: "absolute",
  },
  text1Position: {
    textAlign: "left",
    left: "50%",
    marginLeft: -152.05,
    position: "absolute",
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  icon: {
    borderRadius: Border.br_xs,
    height: "100%",
    width: "100%",
  },
  back: {
    left: 260,
    width: 41,
    top: 0,
  },
  frame1: {
    top: 289,
    width: 301,
    left: 0,
    overflow: "hidden",
  },
  frame: {
    top: -270,
    left: -244,
    height: 976,
    width: 1032,
    overflow: "hidden",
  },
  frameIcon: {
    width: 519,
    height: 175,
    overflow: "hidden",
  },
  backdropBaseIcon: {
    right: 5,
    bottom: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rememberPassword1: {
    color: Color.colorDarkgray,
  },
  text: {
    color: Color.dark,
  },
  rememberPassword: {
    fontFamily: FontFamily.sFProTextRegular,
  },
  loginNow1: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProTextRegular,
  },
  rememberPasswordLoginContainer: {
    left: 82,
    textAlign: "center",
    top: 429,
    position: "absolute",
  },
  loginNow3: {
    fontWeight: "700",
    color: Color.dark,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
  },
  loginNow2: {
    left: 81,
  },
  sendCode: {
    color: Color.white,
    width: 88,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
  },
  sendcodebutton: {
    height: "11.2%",
    width: "78.66%",
    top: "72%",
    right: "11.34%",
    bottom: "16.8%",
    left: "10%",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_84xl,
    backgroundColor: Color.colorMediumseagreen,
  },
  emailbox: {
    top: 143,
    left: 36,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 299,
    height: 50,
    paddingHorizontal: 14,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
  },
  text1: {
    marginTop: -169,
    top: "50%",
    lineHeight: 20,
    width: 342,
    height: 26,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: "50%",
    marginLeft: -152.05,
  },
  title: {
    bottom: 432,
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 41,
    fontFamily: FontFamily.sFProDisplayBold,
    color: Color.colorBlack,
    display: "flex",
    alignItems: "center",
    width: 260,
    height: 32,
    fontWeight: "700",
  },
  loginbox: {
    width: 380,
    height: 500,
  },
  frame3: {
    alignItems: "flex-end",
    marginTop: 65,
    justifyContent: "center",
    width: 624,
    overflow: "hidden",
  },
  frame2: {
    top: 72,
    width: 624,
    left: -244,
    position: "absolute",
    overflow: "hidden",
  },
  forgotpassword: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorMediumseagreen,
  },
});

export default Forgotpassword;
