import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const SolutionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.solutionscreen}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <Text style={[styles.assessment, styles.symptomsTypo]}>Assessment</Text>
      <View style={[styles.loginbox, styles.loginboxPosition]}>
        <Image
          style={styles.backdropBaseIcon}
          contentFit="cover"
          source={require("../assets/backdrop-base.png")}
        />
        <TouchableOpacity
          style={styles.continuebutton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Frame")}
        >
          <Text style={styles.saveThisChecklist}>Save this checklist</Text>
        </TouchableOpacity>
        <Text style={[styles.brownBlight, styles.symptomsPosition]}>
          Brown Blight
        </Text>
        <Text style={[styles.symptoms, styles.symptomsPosition]}>Symptoms</Text>
        <Text style={[styles.solutions, styles.symptomsPosition]}>
          Solutions
        </Text>
        <Text style={[styles.thisDiseaseIs, styles.yellowLeavesTypo]}>
          This disease is very destructive and has become highly limiting for
          tea cultivation and the tea industry. The pathogens causing brown
          blight are described as Colletotrichum species, which are among the
          most important plant pathogenic fungi worldwide.
        </Text>
      </View>
      <View style={[styles.depth1Frame11, styles.loginboxPosition]}>
        <View style={[styles.depth2Frame0, styles.depth2FrameBorder]}>
          <View style={styles.frameLayout}>
            <Image
              style={[styles.depth4Frame0, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/depth-4-frame-0.png")}
            />
          </View>
          <View style={styles.depth3Frame1}>
            <View style={styles.depth4Frame01}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.yellowing, styles.symptomsTypo]}>
                  Yellowing
                </Text>
              </View>
            </View>
            <View style={styles.depth4Frame1}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.yellowLeaves, styles.yellowLeavesTypo]}>
                  Yellow leaves
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.depth2Frame1, styles.depth2FrameBorder]}>
          <View style={styles.frameLayout}>
            <Image
              style={[styles.depth4Frame0, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/depth-4-frame-01.png")}
            />
          </View>
          <View style={styles.depth3Frame1}>
            <View style={styles.depth4Frame01}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.yellowing, styles.symptomsTypo]}>
                  Wilting
                </Text>
              </View>
            </View>
            <View style={styles.depth4Frame1}>
              <View style={styles.depth5Frame0}>
                <Text style={[styles.yellowLeaves, styles.yellowLeavesTypo]}>
                  Wilting
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  symptomsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  loginboxPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  symptomsPosition: {
    color: Color.colorBlack,
    left: 29,
    position: "absolute",
  },
  yellowLeavesTypo: {
    fontFamily: FontFamily.lexendRegular,
    textAlign: "left",
  },
  depth2FrameBorder: {
    padding: Padding.p_base,
    height: 131,
    borderWidth: 1,
    borderColor: Color.colorHoneydew_200,
    borderStyle: "solid",
    backgroundColor: Color.colorMintcream,
    top: 16,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 40,
  },
  bgIcon: {
    top: -270,
    left: -244,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  assessment: {
    top: 53,
    left: 124,
    color: Color.white,
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    position: "absolute",
  },
  backdropBaseIcon: {
    top: 0,
    right: 0,
    bottom: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  saveThisChecklist: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProTextRegular,
    textAlign: "center",
    width: 134,
    color: Color.white,
  },
  continuebutton: {
    height: "7.91%",
    width: "79.73%",
    top: "87.15%",
    right: "10.13%",
    bottom: "4.94%",
    left: "10.13%",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_67xl,
    paddingVertical: Padding.p_lg,
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorMediumseagreen,
  },
  brownBlight: {
    top: 29,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  symptoms: {
    top: 269,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  solutions: {
    top: 474,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  thisDiseaseIs: {
    top: 79,
    lineHeight: 24,
    width: 314,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 29,
    position: "absolute",
  },
  loginbox: {
    top: 104,
    height: 708,
  },
  depth4Frame0: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  yellowing: {
    lineHeight: 20,
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    height: 20,
    width: 139,
  },
  yellowLeaves: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorSeagreen,
  },
  depth4Frame1: {
    height: 21,
    marginTop: 4,
    width: 139,
  },
  depth3Frame1: {
    height: 45,
    marginTop: 12,
    width: 139,
  },
  depth2Frame0: {
    left: 16,
    width: 160,
  },
  depth2Frame1: {
    left: 193,
    width: 165,
  },
  depth1Frame11: {
    top: 411,
    height: 163,
  },
  solutionscreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorMediumseagreen,
  },
});

export default SolutionScreen;
