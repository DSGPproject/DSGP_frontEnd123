import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homescreen}>
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
      <View style={[styles.imageWrapper, styles.imageLayout]}>
        <View style={[styles.image, styles.imageLayout]} />
      </View>
      <Text style={[styles.title, styles.titleLayout]}>Welcome back,</Text>
      <LinearGradient
        style={styles.depth6Frame2Parent}
        locations={[0, 1]}
        colors={["#b0ffcb", "#eae7e7"]}
      >
        <View style={[styles.depth6Frame2, styles.framePosition]}>
          <View style={styles.depth7Frame0}>
            <Text style={styles.diagnoseATea}>
              Diagnose a tea plant disease
            </Text>
          </View>
        </View>
        <View style={styles.depth6Frame21}>
          <View style={styles.depth7Frame01}>
            <Text style={styles.takeAPhoto}>{`Take a photo of the tea plant 
leaf to diagnose diseases`}</Text>
          </View>
        </View>
        <Pressable
          style={[styles.depth5Frame2, styles.depth5FrameLayout]}
          onPress={() => navigation.navigate("DiagnoseScreen")}
        >
          <View style={[styles.depth6Frame0, styles.frameLayout1]}>
            <View style={styles.depth7Frame01}>
              <Text style={styles.startScan}>Start Scan</Text>
            </View>
          </View>
          <Image
            style={styles.depth6Frame1}
            contentFit="cover"
            source={require("../assets/depth-6-frame-11.png")}
          />
        </Pressable>
        <Image
          style={[styles.depth5Frame0, styles.depth5FrameLayout]}
          contentFit="cover"
          source={require("../assets/depth-5-frame-0.png")}
        />
        <Image
          style={[styles.depth5Frame0, styles.depth5FrameLayout]}
          contentFit="cover"
          source={require("../assets/depth-5-frame-0.png")}
        />
      </LinearGradient>
      <Text style={[styles.yourActivity, styles.yourActivityTypo]}>
        Your Activity
      </Text>
      <Text style={[styles.suggestedActions, styles.yourActivityTypo]}>
        Suggested Actions
      </Text>
      <View style={[styles.depth1Frame10, styles.depth1FrameLayout]}>
        <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
          <Image
            style={styles.depth3Frame0}
            contentFit="cover"
            source={require("../assets/depth-3-frame-01.png")}
          />
          <View style={styles.depth3Frame2}>
            <View style={styles.depth4Frame0}>
              <View style={styles.depth7Frame01}>
                <Text style={[styles.scanned2Days, styles.scanned2DaysTypo]}>
                  Scanned 2 days ago
                </Text>
              </View>
            </View>
            <View style={[styles.depth4Frame1, styles.frameLayout1]}>
              <View style={styles.depth7Frame01}>
                <Text style={styles.healthy}>Healthy</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.depth2Frame1, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/depth-2-frame-1.png")}
        />
      </View>
      <View style={[styles.depth1Frame10, styles.depth1FrameLayout]}>
        <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
          <Image
            style={styles.depth3Frame0}
            contentFit="cover"
            source={require("../assets/depth-3-frame-01.png")}
          />
          <View style={styles.depth3Frame2}>
            <View style={styles.depth4Frame0}>
              <View style={styles.depth7Frame01}>
                <Text style={[styles.scanned2Days, styles.scanned2DaysTypo]}>
                  Scanned 2 days ago
                </Text>
              </View>
            </View>
            <View style={[styles.depth4Frame1, styles.frameLayout1]}>
              <View style={styles.depth7Frame01}>
                <Text style={styles.healthy}>Healthy</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.depth2Frame1, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/depth-2-frame-1.png")}
        />
      </View>
      <View style={[styles.depth1Frame12, styles.depth1FrameLayout]}>
        <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
          <Image
            style={styles.depth3Frame0}
            contentFit="cover"
            source={require("../assets/depth-3-frame-01.png")}
          />
          <View style={styles.depth3Frame2}>
            <View style={styles.depth4Frame0}>
              <View style={styles.depth7Frame01}>
                <Text style={[styles.scanned2Days, styles.scanned2DaysTypo]}>
                  Scanned 3 days ago
                </Text>
              </View>
            </View>
            <View style={[styles.depth4Frame1, styles.frameLayout1]}>
              <View style={styles.depth7Frame01}>
                <Text style={styles.healthy}>Healthy</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.depth2Frame1, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/depth-2-frame-1.png")}
        />
      </View>
      <View style={[styles.depth1Frame101, styles.depth1FrameLayout1]}>
        <View style={[styles.depth2Frame03, styles.framePosition]}>
          <View style={styles.depth3Frame03}>
            <View style={styles.depth7Frame01}>
              <Text style={[styles.pruneYourTea, styles.scanned2DaysTypo]}>
                Prune your tea plants
              </Text>
            </View>
          </View>
          <View style={[styles.depth5Frame07, styles.depth2FrameFlexBox]}>
            <View style={styles.depth6Frame01}>
              <Image
                style={styles.depth7Frame03}
                contentFit="cover"
                source={require("../assets/depth-7-frame-0.png")}
              />
            </View>
          </View>
          <View style={[styles.depth3Frame1, styles.frameLayout]}>
            <View style={[styles.depth4Frame04, styles.frameLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.depth1Frame13, styles.depth1FrameLayout1]}>
        <View style={[styles.depth2Frame03, styles.framePosition]}>
          <View style={styles.depth3Frame03}>
            <View style={styles.depth7Frame01}>
              <Text style={[styles.pruneYourTea, styles.scanned2DaysTypo]}>
                Water your tea plants
              </Text>
            </View>
          </View>
          <View style={[styles.depth5Frame07, styles.depth2FrameFlexBox]}>
            <View style={styles.depth6Frame01}>
              <Image
                style={styles.depth7Frame03}
                contentFit="cover"
                source={require("../assets/depth-7-frame-0.png")}
              />
            </View>
          </View>
          <View style={[styles.depth3Frame1, styles.frameLayout]}>
            <View style={[styles.depth4Frame04, styles.frameLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    height: 44,
    width: 44,
    position: "absolute",
  },
  titleLayout: {
    height: 32,
    alignItems: "center",
  },
  framePosition: {
    top: 14,
    position: "absolute",
  },
  depth5FrameLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 21,
    overflow: "hidden",
  },
  yourActivityTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_3xl,
    left: 22,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  depth1FrameLayout: {
    height: 72,
    width: 375,
    backgroundColor: Color.colorMintcream,
    left: 0,
    position: "absolute",
  },
  depth2FrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  scanned2DaysTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  frameLayout: {
    width: 28,
    height: 28,
  },
  depth1FrameLayout1: {
    width: 375,
    backgroundColor: Color.colorMintcream,
    height: 56,
    left: 0,
    position: "absolute",
  },
  bgIcon: {
    top: -270,
    left: -244,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  loginboxIcon: {
    top: 216,
    right: 0,
    bottom: -20,
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  image: {
    top: 0,
    borderRadius: 14,
    backgroundColor: Color.white,
    left: 0,
  },
  imageWrapper: {
    top: 47,
    left: 313,
  },
  title: {
    marginLeft: -165.5,
    bottom: 727,
    left: "50%",
    fontSize: FontSize.size_5xl,
    lineHeight: 41,
    color: Color.white,
    display: "flex",
    width: 218,
    textAlign: "left",
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    letterSpacing: 0,
    height: 32,
    position: "absolute",
  },
  diagnoseATea: {
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.lexendExtraBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  depth7Frame0: {
    width: 197,
  },
  depth6Frame2: {
    left: 14,
    width: 228,
    height: 40,
  },
  takeAPhoto: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    fontFamily: FontFamily.lexendRegular,
    lineHeight: 21,
    width: 197,
    textAlign: "left",
  },
  depth7Frame01: {
    alignSelf: "stretch",
  },
  depth6Frame21: {
    top: 40,
    width: 189,
    height: 42,
    left: 17,
    position: "absolute",
  },
  startScan: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    textAlign: "left",
  },
  depth6Frame0: {
    width: 73,
    backgroundColor: Color.white,
  },
  depth6Frame1: {
    width: 18,
    height: 18,
    marginLeft: 4,
  },
  depth5Frame2: {
    top: 92,
    width: 119,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    left: 17,
    height: 32,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  depth5Frame0: {
    top: 32,
    left: 206,
    width: 90,
    height: 84,
  },
  depth6Frame2Parent: {
    top: 133,
    left: 30,
    borderRadius: Border.br_base,
    width: 315,
    height: 140,
    backgroundColor: "transparent",
    position: "absolute",
    overflow: "hidden",
  },
  yourActivity: {
    top: 304,
  },
  suggestedActions: {
    top: 538,
  },
  depth3Frame0: {
    borderRadius: Border.br_5xs,
    width: 56,
    height: 56,
    overflow: "hidden",
  },
  scanned2Days: {
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  depth4Frame0: {
    height: 24,
    width: 159,
    overflow: "hidden",
  },
  healthy: {
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.lexendRegular,
    lineHeight: 21,
    textAlign: "left",
  },
  depth4Frame1: {
    width: 159,
  },
  depth3Frame2: {
    height: 45,
    marginLeft: 16,
    width: 159,
    justifyContent: "center",
  },
  depth2Frame0: {
    top: 8,
    left: 16,
    width: 273,
    height: 56,
    flexDirection: "row",
    position: "absolute",
  },
  depth2Frame1: {
    top: 20,
    left: 333,
    height: 28,
    position: "absolute",
  },
  depth1Frame10: {
    top: 363,
  },
  depth1Frame12: {
    top: 435,
  },
  pruneYourTea: {
    fontFamily: FontFamily.lexendRegular,
  },
  depth3Frame03: {
    width: 302,
    height: 24,
    overflow: "hidden",
  },
  depth7Frame03: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  depth6Frame01: {
    height: 24,
    width: 44,
  },
  depth5Frame07: {
    width: 26,
    height: 28,
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
  },
  depth4Frame04: {
    height: 28,
  },
  depth3Frame1: {
    justifyContent: "flex-end",
    height: 28,
    marginLeft: 16,
    flexDirection: "row",
  },
  depth2Frame03: {
    left: 23,
    width: 351,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  depth1Frame101: {
    top: 574,
    height: 56,
  },
  depth1Frame13: {
    top: 630,
    height: 56,
  },
  homescreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HomeScreen;
