import { Text, View, StyleSheet, Image } from "react-native";
import {
  height,
  margin,
  padding,
  colorVariants,
  fontStyle,
  fontSize,
  widthVariants,
  position,
  fontWeight,
  flexDirections,
} from "../../contants/globalConstants";

export const ScanToken = () => {
  const progressValue = "70%";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inspectorImage}>
        <Image
          source={require("../../assets/inspector.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.qrContainer}></View>
      <View style={styles.qrProgress}>
        <Text style={styles.scanningProgressText}>
          QR Code Scanning In Progress..
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[styles.progressBarAmount, { width: progressValue }]}
        ></View>
        <Text style={styles.progressBarAmountText}>{progressValue}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    margin: margin.small,
    flex: 1,
  },
  inspectorImage: {
    alignItems: position.center,
    justifyContent: position.center,
    padding: padding.small,
  },
  qrContainer: {
    height: height.qrContainer,
    backgroundColor: colorVariants.babyBlue,
    padding: padding.small,
  },
  qrProgress: {
    paddingTop: padding.large,
    paddingBottom: padding.large,
    left: position.none,
    flexDirection: flexDirections.row,
    justifyContent: position.center,
  },
  scanningProgressText: {
    fontFamily: fontStyle.subTitleText,
    fontSize: fontSize.large,
  },
  progressBar: {
    height: 25,
    borderRadius: 100,
    backgroundColor: colorVariants.white,
  },
  progressBarAmount: {
    backgroundColor: colorVariants.dodgerblue,
    height: widthVariants.full,
    borderRadius: 100,
  },
  progressBarAmountText: {
    color: colorVariants.white,
    position: position.absolute,
    left: 0,
    right: 0,
    zIndex: 1,
    top: 3,
    textAlign: position.center,
    fontSize: fontSize.small,
    fontWeight: fontWeight.bold,
  },
});
