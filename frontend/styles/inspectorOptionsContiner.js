import { StyleSheet } from "react-native";
import {
  colorVariants,
  commonValues,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  margin,
  padding,
  position,
  width,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  mainContainer: {
    margin: margin.small,
    flex: flexValues.full,
  },
  optionsContainer: {
    flex: flexValues.full,
    marginTop: margin.xxxLarge,
    paddingTop: padding.singleOptionPaddingTop,
  },
  rowContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceAround,
    marginBottom: margin.medium,
  },
  singleOption: {
    borderRadius: commonValues.optionsBorderRadius,
    borderRightColor: colorVariants.white,
    padding: padding.medium,
    backgroundColor: colorVariants.babyBlue,
    width: width.InspectionSingleOptionsWidth,
    alignItems: position.center,
  },
  singleOptionTextColor: {
    color: colorVariants.white,
    fontFamily: fontFamily.inspectorOptionsText,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.medium,
    alignItems: position.center,
    justifyContent: position.center,
    alignSelf: position.center,
  },
});
