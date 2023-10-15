import { StyleSheet } from "react-native";
import {
  borderRadius,
  borderWidth,
  colorVariants,
  flexDirections,
  fontFamily,
  fontSize,
  margin,
  padding,
  position,
  flexValues,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colorVariants.whiteSmoke,
    borderWidth: borderWidth.formOutset,
    borderColor: colorVariants.babyBlue,
    padding: padding.xSmall,
    justifyContent: position.center,
  },
  inquiryFormHeadingContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
    paddingBottom: padding.xSmall,
  },
  inquiryFormHeadingContainerText: {
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.xLarge,
  },
  commonDetailsRecord: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
    marginTop: margin.xSmall,
  },
  commonDetailsRecordKey: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
  commonDetailsRecordValue: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.gray,
  },
  formInputContainer: {
    marginTop: margin.xxSmall,
    padding: padding.xxSmall,
    backgroundColor: colorVariants.white,
  },
  textInput: {
    borderWidth: borderWidth.formField,
    padding: padding.xxSmall,
    fontSize: fontSize.medium,
    borderRadius: borderRadius.textInput,
    marginTop: margin.xxSmall,
  },
});
