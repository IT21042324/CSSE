import { StyleSheet } from "react-native";
import {
  borderRadius,
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  margin,
  padding,
  position,
  width,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  mainContainer: {
    padding: margin.xxSmall,
    flex: flexValues.full,
    backgroundColor: colorVariants.white,
  },
  qrContainer: {
    height: height.qrContainer,
    backgroundColor: colorVariants.babyBlue,
    padding: padding.xxxSmall,
  },
  qrImage: {
    height: height.full,
    width: width.full,
  },
  scanBtn: {
    marginTop: margin.medium,
    padding: padding.small,
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    backgroundColor: colorVariants.babyBlue,
    width: width.qrScannerBtn,
    alignSelf: position.center,
  },
  scanBtnText: {
    color: colorVariants.white,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
  },
  tokenStatusContainer: {
    width: width.full,
    marginTop: margin.medium,
    height: height.tokenStatusContainer,
  },
  tokenStatusDetailsContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceAround,
    alignItems: position.center,
    backgroundColor: colorVariants.whiteSmoke,
    padding: padding.small,
  },
  tokenStatusText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
  },
  inquiryBtn: {
    marginTop: margin.medium,
    justifyContent: position.center,
    alignItems: position.center,
    backgroundColor: colorVariants.babyBlue,
    padding: padding.xxSmall,
    width: width.half,
    alignSelf: position.center,
    borderRadius: borderRadius.inquiryBtn,
  },
  inquiryBtnText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
});
