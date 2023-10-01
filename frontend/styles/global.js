import { StyleSheet, StatusBar } from "react-native";
import {
  colorVariants,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  margin,
} from "../contants/globalConstants";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colorVariants.white,
    flex: flexValues.full,
  },
  titleText: {
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.large,
    color: colorVariants.darkGray,
  },
  subTitleText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.black,
  },
  errorText: {
    color: colorVariants.crimson,
    fontWeight: fontWeight.bold,
    marginTop: margin.formErrorText,
  },
});
