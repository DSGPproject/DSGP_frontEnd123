import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const DiagnoseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.diagnosescreen, styles.frameBg1]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={styles.loginboxIcon}
        contentFit="cover"
        source={require("../assets/loginbox.png")}
      />
      <LinearGradient
        style={styles.depth6Frame2Parent}
        locations={[0, 1]}
        colors={["#b0ffcb", "#eae7e7"]}
      >
        <View style={styles.depth6Frame2}>
          <View style={styles.depth7Frame0}>
            <Text style={styles.diagnoseATea}>
              Diagnose a tea plant disease
            </Text>
          </View>
        </View>
        <View style={styles.depth6Frame21}>
          <View style={styles.depth7Frame01}>
            <Text style={styles.takeAPhoto}>{`Take a photo of the tea plant 
leaf upload a photo to 
diagnose diseases`}</Text>
          </View>
        </View>
        <Image
          style={styles.depth5Frame0}
          contentFit="cover"
          source={require("../assets/depth-5-frame-0.png")}
        />
        <Image
          style={styles.depth5Frame0}
          contentFit="cover"
          source={require("../assets/depth-5-frame-0.png")}
        />
      </LinearGradient>
      <Pressable
        style={[styles.depth5Frame2, styles.frameFlexBox]}
        onPress={() => navigation.navigate("SolutionScreen")}
      >
        <View style={[styles.depth6Frame0, styles.frameBg1]}>
          <View style={styles.depth7Frame01}>
            <Text style={[styles.startScan, styles.startScanClr]}>
              Start Scan
            </Text>
          </View>
        </View>
        <Image
          style={styles.depth6Frame1}
          contentFit="cover"
          source={require("../assets/depth-6-frame-1.png")}
        />
      </Pressable>
      <Text style={[styles.diagnose, styles.diagnoseTypo]}>Diagnose</Text>
      <View style={[styles.depth2Frame1, styles.frameBg]}>
        <Image
          style={styles.depth3Frame0}
          contentFit="cover"
          source={require("../assets/depth-3-frame-0.png")}
        />
        <View style={[styles.depth3Frame1, styles.frameBg]}>
          <View style={styles.depth7Frame01}>
            <Text style={[styles.uploadPhoto, styles.diagnoseTypo]}>
              Upload Photo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBg1: {
    backgroundColor: Color.colorMediumseagreen,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  startScanClr: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
  },
  diagnoseTypo: {
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  frameBg: {
    backgroundColor: Color.colorHoneydew_100,
    overflow: "hidden",
  },
  bgIcon: {
    top: -270,
    left: -244,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  loginboxIcon: {
    top: 196,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  diagnoseATea: {
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.lexendExtraBold,
    color: "#0b0b0b",
    textAlign: "left",
  },
  depth7Frame0: {
    width: 197,
  },
  depth6Frame2: {
    top: 14,
    left: 14,
    width: 228,
    height: 40,
    position: "absolute",
  },
  takeAPhoto: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorGray_100,
    lineHeight: 21,
    textAlign: "left",
    width: 197,
  },
  depth7Frame01: {
    alignSelf: "stretch",
  },
  depth6Frame21: {
    top: 40,
    left: 17,
    width: 189,
    height: 42,
    position: "absolute",
  },
  depth5Frame0: {
    top: 32,
    left: 206,
    width: 90,
    height: 84,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  depth6Frame2Parent: {
    top: 126,
    left: 30,
    borderRadius: Border.br_base,
    width: 315,
    height: 140,
    backgroundColor: "transparent",
    position: "absolute",
    overflow: "hidden",
  },
  startScan: {
    fontWeight: "500",
    fontFamily: FontFamily.lexendMedium,
    textAlign: "left",
  },
  depth6Frame0: {
    width: 73,
    height: 21,
    overflow: "hidden",
  },
  depth6Frame1: {
    width: 18,
    height: 18,
    marginLeft: 4,
  },
  depth5Frame2: {
    top: 293,
    left: 222,
    width: 118,
    height: 44,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    overflow: "hidden",
    backgroundColor: Color.colorMediumseagreen,
  },
  diagnose: {
    top: 66,
    left: 131,
    fontSize: FontSize.size_5xl,
    lineHeight: 23,
    color: Color.white,
    position: "absolute",
  },
  depth3Frame0: {
    width: 20,
    height: 20,
  },
  uploadPhoto: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
  },
  depth3Frame1: {
    width: 100,
    marginLeft: 8,
    height: 21,
  },
  depth2Frame1: {
    top: 374,
    left: 107,
    width: 160,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    position: "absolute",
    height: 40,
  },
  diagnosescreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default DiagnoseScreen;
