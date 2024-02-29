import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const OTPVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpverification}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg4.png")}
      />
      <View style={[styles.loginbox, styles.loginboxPosition]}>
        <Image
          style={[styles.backdropBaseIcon, styles.loginboxPosition]}
          contentFit="cover"
          source={require("../assets/backdrop-base1.png")}
        />
        <Text style={[styles.didntReceivedTheContainer, styles.resend3Typo]}>
          <Text style={styles.didntReceivedTheCode}>
            <Text style={styles.didntReceivedThe}>
              Didn’t received the code?
            </Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.resendTypo}>Resend</Text>
          </Text>
        </Text>
        <TouchableOpacity
          style={[styles.resend2, styles.resend2Position]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.resend3, styles.resendTypo]}> Resend</Text>
        </TouchableOpacity>
        <Text
          style={styles.text1}
        >{`Enter the Verification we just sent on your email
Address`}</Text>
        <Text style={styles.title}>OTP Verification</Text>
        <Pressable
          style={styles.verifybutton}
          onPress={() => navigation.navigate("PasswordSuccessful")}
        >
          <Text style={styles.verify}>VERIFY</Text>
        </Pressable>
      </View>
      <Image
        style={styles.otpverificationChild}
        contentFit="cover"
        source={require("../assets/group-19104.png")}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Forgotpassword")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={styles.enterOtpInput}>
        <TextInput
          style={styles.textinput}
          keyboardType="number-pad"
          autoCapitalize="none"
          placeholderTextColor="#1e232c"
        />
        <TextInput
          style={styles.textinput1}
          keyboardType="number-pad"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.textinput2, styles.blankLayout]}
          keyboardType="number-pad"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.blank, styles.blankLayout]}
          keyboardType="number-pad"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginboxPosition: {
    left: 0,
    position: "absolute",
  },
  resend3Typo: {
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  resend2Position: {
    top: 429,
    position: "absolute",
  },
  resendTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.sFProTextRegular,
  },
  blankLayout: {
    borderWidth: 1,
    marginLeft: 15,
    width: 63,
    borderStyle: "solid",
    height: 57,
    borderRadius: Border.br_5xs,
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
  didntReceivedThe: {
    color: Color.colorDarkgray,
  },
  text: {
    color: Color.dark,
  },
  didntReceivedTheCode: {
    fontFamily: FontFamily.sFProTextRegular,
  },
  didntReceivedTheContainer: {
    left: 80,
    textAlign: "center",
    top: 429,
    position: "absolute",
  },
  resend3: {
    color: Color.dark,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
  },
  resend2: {
    left: 81,
  },
  text1: {
    marginTop: -169,
    top: "50%",
    lineHeight: 20,
    width: 342,
    height: 26,
    textAlign: "left",
    left: "50%",
    marginLeft: -152.05,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  title: {
    bottom: 432,
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 41,
    fontFamily: FontFamily.sFProDisplayBold,
    color: Color.colorBlack,
    display: "flex",
    width: 260,
    height: 32,
    alignItems: "center",
    textAlign: "left",
    left: "50%",
    marginLeft: -152.05,
    fontWeight: "700",
    position: "absolute",
  },
  verify: {
    fontSize: FontSize.size_mini,
    color: Color.white,
    width: 88,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
  },
  verifybutton: {
    height: "11.2%",
    width: "78.66%",
    top: "71.6%",
    right: "11.34%",
    bottom: "17.2%",
    left: "10%",
    paddingHorizontal: Padding.p_84xl,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorMediumseagreen,
  },
  loginbox: {
    top: 312,
    width: 380,
    height: 500,
  },
  otpverificationChild: {
    top: 72,
    left: 100,
    width: 175,
    height: 175,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xs,
    height: "100%",
    width: "100%",
  },
  back: {
    left: 16,
    top: 19,
    width: 41,
    height: 41,
    position: "absolute",
  },
  textinput: {
    alignSelf: "center",
    width: 63,
    borderWidth: 1.2,
    borderStyle: "solid",
    borderColor: Color.colorMediumseagreen,
    backgroundColor: Color.white,
    height: 57,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  textinput1: {
    marginLeft: 15,
    width: 63,
    borderWidth: 1.2,
    borderColor: Color.colorMediumseagreen,
    borderStyle: "solid",
    backgroundColor: Color.white,
    height: 57,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  textinput2: {
    borderColor: Color.colorMediumseagreen,
    backgroundColor: Color.white,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blank: {
    backgroundColor: "#f7f8f9",
    borderColor: "#e8ecf4",
  },
  enterOtpInput: {
    top: 457,
    left: 38,
    width: 297,
    flexDirection: "row",
    height: 57,
    alignItems: "center",
    position: "absolute",
  },
  otpverification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorMediumseagreen,
  },
});

export default OTPVerification;
