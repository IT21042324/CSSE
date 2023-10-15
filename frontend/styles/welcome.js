import { StyleSheet } from "react-native";
import {
  colorVariants,
  flexDirections,
  flexValues,
  fontSize,
  fontWeight,
  margin,
  padding,
  position,
  widthVariants,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  container: {
    flex: flexValues.full,
    alignItems: position.center,
    justifyContent: position.center,
    backgroundColor: colorVariants.white,
  },
  title: {
    fontSize: fontSize.xLarge,
    fontWeight: fontWeight.bold,
    marginBottom: margin.large,
  },
  input: {
    borderWidth: 1,
    borderColor: colorVariants.lightGray,
    borderRadius: 4,
    padding: padding.xxSmallInBetween,
    marginVertical: margin.xxSmallInBetween,
    width: widthVariants.eightyPercent,
  },
  label: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    marginVertical: margin.xxSmallInBetween,
    alignSelf: position.flexStart,
    marginLeft: margin.tenPercent,
  },
  radioGroup: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceAround,
    width: widthVariants.full,
    marginBottom: margin.small,
    padding: padding.xxSmall,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: colorVariants.lightGray,
    borderRadius: 4,
    padding: padding.xxxSmall,
    alignItems: position.center,
    width: widthVariants.fourtyPercent,
  },
  radioButtonSelected: {
    backgroundColor: colorVariants.lightGray,
  },
  radioLabel: {
    fontSize: fontSize.mediumSmall,
  },
  button: {
    backgroundColor: colorVariants.deepSkyBlue,
    borderRadius: 4,
    padding: padding.xxSmall,
    width: widthVariants.eightyPercent,
    alignItems: position.center,
    marginTop: margin.small,
  },
  buttonText: {
    color: colorVariants.white,
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
  },
  toggleButton: {
    marginTop: margin.small,
  },
  toggleButtonText: {
    color: colorVariants.deepSkyBlue,
    fontSize: fontSize.mediumSmall,
  },
});
